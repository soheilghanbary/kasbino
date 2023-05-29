"use client";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="rounded bg-background-secondary justify-center flex items-center p-1 gap-1.5">
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "flex items-center justify-center text-center rounded-full p-1",
          theme === "dark" && "text-foreground-secondary bg-background-primary"
        )}
      >
        <MoonIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "flex items-center justify-center text-center rounded-full p-1",
          theme === "light" && "text-foreground-secondary bg-background-primary"
        )}
      >
        <SunIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={cn(
          "flex items-center justify-center text-center rounded-full p-1",
          theme === "system" &&
            "text-foreground-secondary bg-background-primary"
        )}
      >
        <LaptopIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
