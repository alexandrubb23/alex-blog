"use client";

import { ClientOnly, HStack, Skeleton } from "@chakra-ui/react";

import { useAccentColor } from "@/hooks/useAccentColor";
import { ACCENT_HEX, AccentColor } from "@/lib/palette";

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
              style={{
                position: "relative",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: color,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "transform 150ms",
                outline: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {active && (
                <span
                  aria-hidden
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
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
