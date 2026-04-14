import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function Title({ title, description, className }: TitleProps) {
  return (
    <div className={cn("text-center mb-16 group", className)}>
      <h2 className="text-3xl font-bold relative inline-block">
        {title}

        {/* underline gradient */}
        <span
          className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
          rounded-full"
        />
      </h2>

      {description && (
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
