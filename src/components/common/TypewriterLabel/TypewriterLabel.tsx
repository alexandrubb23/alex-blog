"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useInterval, useTimeout } from "usehooks-ts";

const CHAR_INTERVAL_MS = 22;
const DEFAULT_DELAY_MS = 300;
const CURSOR_ANIMATION = "typewriter-cursor-blink";
/** The static prefix shown immediately when the element enters the viewport. */
export const LABEL_PREFIX = "//";

const PHASE = {
  IDLE: "idle",
  WAITING: "waiting",
  TYPING: "typing",
  DONE: "done",
} as const;

type Phase = (typeof PHASE)[keyof typeof PHASE];

interface TypewriterLabelProps extends BoxProps {
  children: string;
  /** Milliseconds to show blinking cursor before typing begins. */
  delay?: number;
}

const TypewriterLabel = ({
  children,
  delay = DEFAULT_DELAY_MS,
  ...boxProps
}: TypewriterLabelProps) => {
  const fullText = children;
  // Split into static prefix ("//") and the rest to be typed
  const prefix = fullText.startsWith(LABEL_PREFIX) ? LABEL_PREFIX : "";
  const restText = fullText.slice(prefix.length);

  const [phase, setPhase] = useState<Phase>(PHASE.IDLE);
  const [charCount, setCharCount] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Flip to "waiting" as soon as element enters the viewport
  if (inView && phase === PHASE.IDLE) {
    setPhase(PHASE.WAITING);
  }

  // After the delay, start typing
  useTimeout(
    () => {
      if (inView && phase === PHASE.WAITING) setPhase(PHASE.TYPING);
    },
    phase === PHASE.WAITING ? delay : null
  );

  // Type one character of restText per interval
  useInterval(
    () => {
      setCharCount((c) => {
        const next = c + 1;
        if (next >= restText.length) {
          setPhase(PHASE.DONE);
          return next;
        }
        return next;
      });
    },
    phase === PHASE.TYPING ? CHAR_INTERVAL_MS : null
  );

  const showCursor = phase === PHASE.WAITING || phase === PHASE.TYPING;
  const cursorBlinking = phase === PHASE.WAITING;

  return (
    <Box ref={ref} {...boxProps}>
      <style>{`
        @keyframes ${CURSOR_ANIMATION} {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
      {/* prefix ("//") is always visible once in view; the rest types in */}
      {phase !== PHASE.IDLE && prefix}
      {restText.slice(0, charCount)}
      {showCursor && (
        <Box
          as="span"
          display="inline-block"
          w="1px"
          h="0.85em"
          bg="bone"
          verticalAlign="middle"
          ml="1px"
          style={{
            animation: `${CURSOR_ANIMATION} 1s step-end infinite`,
            animationPlayState: cursorBlinking ? "running" : "paused",
          }}
        />
      )}
    </Box>
  );
};

export default TypewriterLabel;
