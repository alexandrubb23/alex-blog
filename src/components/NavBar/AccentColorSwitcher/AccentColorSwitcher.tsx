"use client";

import { ClientOnly, HStack, Skeleton } from "@chakra-ui/react";

import { useAccentColor } from "@/hooks/useAccentColor";
import { ACCENT_HEX, AccentColor } from "@/lib/palette";
import styles from "./AccentColorSwitcher.module.css";

const ACCENTS: { id: AccentColor; label: string }[] = [
  { id: AccentColor.Purple, label: "Purple" },
  { id: AccentColor.Cyan, label: "Cyan" },
  { id: AccentColor.Amber, label: "Amber" },
  { id: AccentColor.Green, label: "Green" },
];

const Swatches = () => {
  const { accent, setAccent } = useAccentColor();

  return (
    <HStack
      as="ul"
      gap="1.5"
      aria-label="Accent color"
      listStyleType="none"
      p="0"
      m="0"
    >
      {ACCENTS.map(({ id, label }) => {
        const color = ACCENT_HEX[id];
        const active = accent === id;

        return (
          <li key={id}>
            <button
              onClick={() => setAccent(id)}
              aria-label={label}
              aria-pressed={active}
              title={label}
              className={styles.swatch}
              style={{ background: color }}
            >
              {active && (
                <span
                  aria-hidden
                  className={styles.activeIndicator}
                  style={{
                    boxShadow: `0 0 8px ${color}, 0 0 0 2px var(--body-background), 0 0 0 3px ${color}`,
                  }}
                />
              )}
            </button>
          </li>
        );
      })}
    </HStack>
  );
};

const AccentColorSwitcher = () => (
  <ClientOnly
    fallback={
      <HStack gap="1.5" aria-hidden>
        {ACCENTS.map(({ id }) => (
          <Skeleton
            key={id}
            w="14px"
            h="14px"
            borderRadius="full"
            flexShrink={0}
          />
        ))}
      </HStack>
    }
  >
    <Swatches />
  </ClientOnly>
);

export default AccentColorSwitcher;
