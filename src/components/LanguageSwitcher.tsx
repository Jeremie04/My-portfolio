import { useTranslation } from "react-i18next";
import i18n from "@/config/i18n";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const languages = [
  { code: "fr", label: "FR", flag: "https://flagcdn.com/w80/mf.png" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w80/us.png" },
];

export default function LanguageSwitcher() {
  const { i18n: i18next } = useTranslation();

  const currentLang =
    languages.find((l) => l.code === i18next.language) || languages[0];

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <img
            src={currentLang.flag}
            alt={currentLang.label}
            loading="lazy"
            className="w-5 h-5 rounded-sm"
          />
          <span>{currentLang.label}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={lang.flag}
              alt={lang.label}
              loading="lazy"
              className="w-5 h-5 rounded-sm"
            />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
