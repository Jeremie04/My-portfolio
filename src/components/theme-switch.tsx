import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@/context/theme-provider";

import { Swap, SwapOff, SwapOn } from "@/components/ui/swap";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Swap
        onClick={toggleTheme}
        animation="rotate"
        className="size-12 rounded-lg border bg-muted/50"
      >
        <SwapOn>
          <SunIcon className="size-5" />
        </SwapOn>
        <SwapOff>
          <MoonIcon className="size-5" />
        </SwapOff>
      </Swap>
    </div>
  );
}
