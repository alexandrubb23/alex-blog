"use client";

import { useEffect, useState } from "react";

import { AccentColor } from "@/lib/palette";
import { accentColorStorage } from "@/services/accentColorStorage";

export function useAccentColor() {
  const [accent, setAccentState] = useState<AccentColor>(() =>
    accentColorStorage.get()
  );

  // Apply on mount before first paint
  useEffect(() => {
    const stored = accentColorStorage.get();
    if (stored !== accentColorStorage.DEFAULT) {
      document.documentElement.setAttribute("data-accent", stored);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (accent === accentColorStorage.DEFAULT) {
      html.removeAttribute("data-accent");
    } else {
      html.setAttribute("data-accent", accent);
    }
    accentColorStorage.set(accent);
  }, [accent]);

  return { accent, setAccent: setAccentState };
}
