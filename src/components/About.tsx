import { useTranslation } from "react-i18next";
import Parcours from "./Parcours";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 text-center max-w-4xl mx-auto px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        <div className="order-1">
          <h2 className="text-3xl font-bold mb-6">{t("about.title")} </h2>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl mb-5">
            {t("about.paragraph-1")}
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl mb-5">
            {t("about.paragraph-2")}
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl">
            {t("about.paragraph-3")}
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div>
              <p className="text-2xl font-bold">Bacc +5</p>
              <p className="text-sm text-muted-foreground">
                {t("about.details.formation")}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm text-muted-foreground">
                {t("about.details.techno")}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">
                {t("about.details.passion")}
              </p>
            </div>
          </div>
        </div>

        {/* PARCOURS */}
        <div className="order-2 space-y-6 h-100">
          <Parcours />
        </div>
      </div>
    </section>
  );
}
