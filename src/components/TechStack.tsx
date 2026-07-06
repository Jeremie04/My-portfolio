import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/theme-provider";
import { skills } from "@/data/skills";
import { useTranslation } from "react-i18next";
import { Title } from "./ui/Title";

export default function TechStack() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = container.current;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (!root || reduce) return;

      const cards = gsap.utils.toArray<HTMLElement>(".skill-card", root);
      gsap.set(cards, { opacity: 0, y: 40 });

      // Révélation fiable à l'entrée dans le viewport (robuste au layout dynamique)
      const io = new IntersectionObserver(
        (entries, obs) => {
          if (entries.some((e) => e.isIntersecting)) {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.12,
            });
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      io.observe(root);

      return () => io.disconnect();
    },
    { scope: container }
  );

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Title
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <div
          ref={container}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category, index) => (
            <div
              key={index}
              className="skill-card group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40"
            >
              {/* En-tête de la carte */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <div className="mt-1.5 h-1 w-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300 group-hover:w-16" />
                </div>
                <span className="rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/10 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {category.techs.length}
                </span>
              </div>

              {/* Technos */}
              <div className="flex flex-wrap gap-x-4 gap-y-5">
                {category.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="flex w-16 flex-col items-center gap-1.5 text-center transition-transform duration-200 hover:scale-110"
                  >
                    {tech.url ? (
                      <img
                        src={
                          resolvedTheme === "dark" && tech.darkmode_url
                            ? tech.darkmode_url
                            : tech.url
                        }
                        alt={tech.name}
                        loading="lazy"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <i className={`${tech.icon} text-4xl`} />
                    )}

                    <span className="text-xs text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
