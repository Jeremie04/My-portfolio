import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import i18n from "@/config/i18n";
import type { Lang } from "@/data/types";
import { services } from "@/data/services";

export function Services() {
  const lang = i18n.language.split("-")[0] as Lang;
  const items = services[lang] || services.en;
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{t("services.title")}</h2>
          <p className="text-muted-foreground mt-4">
            {t("services.description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {items.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
