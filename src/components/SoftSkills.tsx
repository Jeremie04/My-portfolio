import { Marquee } from "@/components/ui/marquee/marquee-animation";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/use-language";
import { softskills, softskills2 } from "@/data/softskills";
import { Title } from "./ui/Title";

export default function SoftSkills() {
  const lang = useLanguage();
  const softskills_ = softskills[lang] || softskills.en;
  const softskills2_ = softskills2[lang] || softskills2.en;
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6">
      <Title title={t("professional_skills.title")} />

      {/* Container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* gradient gauche */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full 
          w-12 sm:w-20 md:w-32 lg:w-40 
          bg-gradient-to-r from-background to-transparent z-10"
        />

        {/* gradient droite */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full 
          w-12 sm:w-20 md:w-32 lg:w-40 
          bg-gradient-to-l from-background to-transparent z-10"
        />

        <Marquee pauseOnHover className="[--duration:27s]">
          {softskills_.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Card
                key={index}
                className="mx-4 flex items-center gap-3 px-6 py-4 bg-muted/40 border hover:scale-105 transition"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium whitespace-nowrap">
                  {skill.label}
                </span>
              </Card>
            );
          })}
        </Marquee>

        {/* ligne 2 (inverse) */}
        <Marquee reverse pauseOnHover className="[--duration:27s]">
          {softskills2_.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Card
                key={`reverse-${index}`}
                className="mx-4 flex items-center gap-3 px-6 py-4 bg-muted/40 border hover:scale-105 transition"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium whitespace-nowrap">
                  {skill.label}
                </span>
              </Card>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
