"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ButtonHeartbeatEffect from "./ui/ButtonHeartbeatEffect";
import SplitText from "./ui/splitText";

// Logos flottants autour de la photo (icônes devicon déjà chargées globalement)
const floatingTechs = [
  { icon: "devicon-react-original colored", pos: "top-4 -left-5" },
  { icon: "devicon-typescript-plain colored", pos: "top-12 -right-6" },
  { icon: "devicon-angularjs-plain colored", pos: "top-[42%] -left-12" },
  { icon: "devicon-nodejs-plain colored", pos: "top-[48%] -right-11" },
  { icon: "devicon-python-plain colored", pos: "bottom-10 -left-4" },
  { icon: "devicon-spring-plain colored", pos: "bottom-3 -right-4" },
];

export default function Hero() {
  const { t } = useTranslation();
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Entrée du texte (toujours active pour que le contenu soit visible)
      gsap.from("[data-animate='up']", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
      });
      gsap.from("[data-animate='right']", {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });

      // Animations décoratives : uniquement si l'utilisateur ne demande pas de mouvement réduit
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Pop d'apparition des logos
        gsap.from("[data-float]", {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.6,
        });

        // Flottement continu, rythme différent par logo
        gsap.to("[data-float]", {
          y: (i) => (i % 2 === 0 ? -12 : 12),
          duration: (i) => 1.2 + (i % 3) * 0.25,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: (i) => 0.7 + i * 0.08,
        });

        // Halo qui tourne et pulse
        gsap.to(".hero-glow", {
          rotate: 360,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
        gsap.to(".hero-glow", {
          scale: 1.12,
          duration: 3.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Parallaxe au mouvement de la souris (effet de profondeur)
        const section = container.current;
        const group = section?.querySelector<HTMLElement>(".hero-photo-group");
        if (!section || !group) return;

        const xTo = gsap.quickTo(group, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(group, "y", { duration: 0.8, ease: "power3" });

        const onMove = (e: PointerEvent) => {
          const r = section.getBoundingClientRect();
          // Ne réagir que si le Hero est visible ; sinon recentrer l'image
          if (r.bottom < 0 || r.top > window.innerHeight) {
            xTo(0);
            yTo(0);
            return;
          }
          // Position normalisée au viewport (bornée à [-0.5, 0.5]) → pas de dérive
          const px = e.clientX / window.innerWidth - 0.5;
          const py = e.clientY / window.innerHeight - 0.5;
          xTo(px * 24);
          yTo(py * 24);
        };

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section
      id="home"
      ref={container}
      className="min-h-screen flex items-center justify-center px-6 overflow-x-clip"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="text-center md:text-left flex-1">
          <SplitText
            text={t("hero.title")}
            tag="h1"
            className="text-4xl md:text-5xl font-bold mb-6"
            delay={100}
            duration={1.25}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <p
            data-animate="up"
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
          >
            {t("hero.description")}
          </p>

          <div
            data-animate="up"
            className="flex flex-col flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects">
              <Button variant="outline">{t("hero.buttons.secondary")}</Button>
            </a>

            <a href="#contact">
              <ButtonHeartbeatEffect label={t("hero.buttons.primary")} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div data-animate="right" className="flex-1 flex justify-center relative">
          <div className="hero-photo-group relative flex items-center justify-center">
            {/* Halo dégradé animé */}
            <div className="hero-glow absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-sky-400/30 via-blue-500/30 to-indigo-500/30 blur-3xl" />

            {/* Photo */}
            <img
              src="/profile.png"
              alt="Jeremie"
              loading="eager"
              fetchPriority="high"
              className="relative w-72 md:w-90 object-contain drop-shadow-xl"
            />

            {/* Logos flottants */}
            {floatingTechs.map((tech, i) => (
              <div
                key={i}
                data-float
                aria-hidden="true"
                className={`hidden md:flex absolute ${tech.pos} h-14 w-14 items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-lg pointer-events-none`}
              >
                <i className={`${tech.icon} text-3xl`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
