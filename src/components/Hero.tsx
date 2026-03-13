"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Bonjour, je suis Jeremie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
          >
            Développeur Full Stack spécialisé en React, Angular et Spring. Je
            conçois des applications web performantes et maintenables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects">
              <Button>Voir mes projets</Button>
            </a>

            <a href="#contact">
              <Button variant="outline">Me contacter</Button>
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
