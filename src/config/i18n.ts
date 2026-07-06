import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "@/locales/fr/translation.json";
import en from "@/locales/en/translation.json";

i18n
  .use(LanguageDetector) // détecte la langue
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

// Garde l'attribut <html lang> synchronisé avec la langue active (SEO + a11y)
const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.split("-")[0];
};
syncHtmlLang(i18n.resolvedLanguage ?? i18n.language);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;