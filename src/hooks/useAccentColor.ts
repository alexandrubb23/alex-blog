"use client";

import { useEffect, useState } from "react";

import { AccentColor } from "@/lib/palette";
import { accentColorStorage } from "@/services/accentColorStorage";

/**
 * Only ever runs on the client (AccentColorSwitcher is wrapped in ClientOnly),
 * so it can read localStorage directly without causing a hydration mismatch.
 */
export function useAccentColor() {
  const [accent, setAccentState] = useState<AccentColor>(() =>
    accentColorStorage.get()
  );

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
