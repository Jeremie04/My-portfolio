import { useTheme } from "@/context/theme-provider";
import { skills } from "@/data/skills";
import { useTranslation } from "react-i18next";
import { Title } from "./ui/Title";

export default function TechStack() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Title
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-center mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-10">
                {category.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center hover:scale-110 transition"
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
                        width={45}
                        height={45}
                      />
                    ) : (
                      <i className={`${tech.icon} text-5xl`}></i>
                    )}

                    <span className="text-sm text-muted-foreground mt-2">
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
