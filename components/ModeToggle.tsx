"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before rendering
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme !== "light";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="border-border bg-background/70 text-foreground hover:bg-muted"
    >
      {isDark ? (
        <Sun className="h-[1.1rem] w-[1.1rem] transition-all" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.1rem] transition-all" />
      )}
      <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
    </Button>
  );
}
