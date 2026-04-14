"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ButtonHeartbeatEffect from "./ui/ButtonHeartbeatEffect";
import SplitText from "./ui/splitText";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
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

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects">
              <Button variant="outline">{t("hero.buttons.secondary")}</Button>
            </a>

            <a href="#contact">
              <ButtonHeartbeatEffect label={t("hero.buttons.primary")} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  );
}
