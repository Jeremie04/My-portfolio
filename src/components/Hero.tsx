"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ButtonHeartbeatEffect from "./ui/ButtonHeartbeatEffect";
import SplitText from "./ui/splitText";

export default function Hero() {
  const { t } = useTranslation();
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: container }
  );

  return (
    <section
      id="home"
      ref={container}
      className="min-h-screen flex items-center justify-center px-6"
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
        <div
          data-animate="right"
          className="flex-1 flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-primary/10 blur-3xl rounded-full" />

          {/* Photo */}
          <img
            src="/profile.png"
            alt="Jeremie"
            loading="lazy"
            className="relative w-72 md:w-90 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
