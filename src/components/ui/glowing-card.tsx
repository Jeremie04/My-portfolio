import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Affiche le halo bleu au survol (true par défaut). */
  glow?: boolean;
  glowClassName?: string;
  contentClassName?: string;
}

export function GlowingCard({
  children,
  className,
  glow = true,
  glowClassName,
  contentClassName,
  ...props
}: GlowingCardProps) {
  return (
    <div className={cn("group relative rounded-2xl", className)}>
      {/* Halo bleu au survol (optionnel) */}
      {glow && (
        <div
          className={cn(
            `pointer-events-none absolute -inset-0.5 rounded-2xl
             bg-gradient-to-r from-sky-500/25 via-indigo-500/25 to-blue-500/25
             opacity-0 blur-lg transition-opacity duration-300
             group-hover:opacity-100`,
            glowClassName
          )}
        />
      )}

      {/* Carte — même style que les cartes de technos (verre dépoli + bordure) */}
      <Card
        className={cn(
          `relative z-10 h-full rounded-2xl
           border border-black/5 dark:border-white/10
           bg-white/70 dark:bg-white/5 backdrop-blur-md
           shadow-sm
           transition-all duration-300
           group-hover:-translate-y-1.5 group-hover:shadow-xl
           group-hover:border-blue-500/40 dark:group-hover:border-blue-400/60`,
          contentClassName
        )}
        {...props}
      >
        {children}
      </Card>
    </div>
  );
}
