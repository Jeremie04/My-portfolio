import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import i18n from "@/config/i18n";
import { parcours } from "@/data/parcours";
import type { Lang } from "@/data/types";
import { useTranslation } from "react-i18next";

export default function Parcours() {
  const lang = i18n.language.split("-")[0] as Lang;
  const items = parcours[lang] || parcours.en;
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">{t("about.background.title")}</h2>
      <Timeline defaultValue={4} className="h-100">
        {items.map((item) => (
          <TimelineItem
            className="even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2 odd:text-left"
            key={item.id}
            step={item.id}
          >
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineContent>{item.content}</TimelineContent>
              <TimelineIndicator />
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
