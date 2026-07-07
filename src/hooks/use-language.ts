import { useEffect, useState } from "react";
import i18n from "@/config/i18n";
import type { Lang } from "@/data/types";

/**
 * Langue courante ("fr" | "en") exposée comme état réactif.
 *
 * Lire `i18n.language` directement pendant le render est une lecture d'un
 * singleton mutable : le React Compiler la traite comme constante, mémoïse les
 * données dérivées (services[lang], etc.) et ne les recalcule jamais au
 * changement de langue. Passer par un `useState` alimenté par l'événement
 * `languageChanged` garantit un recalcul fiable et compatible avec le compiler.
 */
export function useLanguage(): Lang {
  const [lang, setLang] = useState<string>(
    i18n.resolvedLanguage ?? i18n.language
  );

  useEffect(() => {
    const onChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, []);

  return (lang?.split("-")[0] as Lang) || "en";
}
