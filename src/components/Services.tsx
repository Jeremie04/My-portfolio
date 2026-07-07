import { CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/use-language";
import { services } from "@/data/services";
import { Title } from "./ui/Title";
import { GlowingCard } from "./ui/glowing-card";

export function Services() {
  const lang = useLanguage();
  const items = services[lang] || services.en;
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Title
          title={t("services.title")}
          description={t("services.description")}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
          {items.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-xl p-[1px] h-full transition-all duration-300 hover:scale-[1.01]"
              >
                <GlowingCard
                  key={index}
                  className="h-full hover:scale-[1.01]"
                  contentClassName="p-8"
                >
                  <CardContent className="p-0">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-center mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-center mb-6">
                      {service.description}
                    </p>

                    {/* Items */}
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside text-left">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
