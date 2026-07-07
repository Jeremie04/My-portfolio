// Journalise chaque visite (IP + géolocalisation approximative) dans une table
// Supabase, via son API REST — sans dépendance ni backend à héberger.
//
// Le tracking est volontairement "best-effort" :
//   - il ne s'exécute qu'une fois par session,
//   - il n'est jamais bloquant,
//   - il ne casse jamais le site (toute erreur est avalée),
//   - il se désactive si les variables d'environnement sont absentes.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

const SESSION_FLAG = "visit_logged";

export async function trackVisit(): Promise<void> {
  // Config absente → on ne fait rien (le site fonctionne normalement)
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  // Une seule entrée par session de navigation
  try {
    if (sessionStorage.getItem(SESSION_FLAG)) return;
  } catch {
    // sessionStorage indisponible (mode privé strict…) → on continue quand même
  }

  try {
    // 1) IP + géolocalisation du visiteur (API publique gratuite, HTTPS)
    const geo = await fetch("https://ipwho.is/").then((r) => r.json());
    if (!geo || geo.success === false) return;

    // 2) Insertion dans la table `visits` de Supabase (clé anon, insert-only)
    await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        ip: geo.ip ?? null,
        city: geo.city ?? null,
        region: geo.region ?? null,
        country: geo.country ?? null,
        isp: geo.connection?.isp ?? geo.connection?.org ?? null,
        path: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      }),
    });

    try {
      sessionStorage.setItem(SESSION_FLAG, "1");
    } catch {
      /* ignore */
    }
  } catch {
    // Réseau bloqué, bloqueur de pub, quota atteint… → on ignore silencieusement
  }
}
