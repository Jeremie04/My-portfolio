import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowClassName?: string;
  contentClassName?: string;
}

export function GlowingCard({
  children,
  className,
  glowClassName,
  contentClassName,
  ...props
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        `
        group relative rounded-2xl p-[1px]
        will-change-transform
        `,
        className
      )}
    >
      {/* Glow */}
      <div
        className={cn(
          `
          absolute inset-0 rounded-2xl
          pointer-events-none

          bg-gradient-to-r
          from-blue-500/20
          via-indigo-500/20
          to-purple-500/20

          dark:from-blue-400/25
          dark:via-indigo-400/25
          dark:to-purple-400/25

          opacity-0
          group-hover:opacity-100

          blur-xl

          transition-opacity duration-300

          will-change-opacity
          `,
          glowClassName
        )}
      />

      {/* Card */}
      <Card
        className={cn(
          `
          relative z-10 h-full rounded-2xl

          bg-white dark:bg-neutral-900

          border border-neutral-200/70
          dark:border-neutral-800

          shadow-sm dark:shadow-black/20

          transition-all duration-300

          group-hover:-translate-y-1
          group-hover:shadow-xl
          dark:group-hover:shadow-blue-500/10

          will-change-transform
          `,
          contentClassName
        )}
        {...props}
      >
        {children}
      </Card>
    </div>
  );
}
