"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useInterval, useTimeout } from "usehooks-ts";

import type { CodeLine, Lines, Token } from "./types";

const CODE_LINES: CodeLine[] = [
  [
    { text: "const ", color: "iris" },
    { text: "author", color: "bone" },
    { text: ": ", color: "ashMuted" },
    { text: "Author", color: "#E5C07B" },
    { text: " = {", color: "ashMuted" },
  ],
  [
    { text: "  role", color: "irisSoft" },
    { text: ":     ", color: "ashMuted" },
    { text: '"Software Engineer"', color: "signal" },
    { text: ",", color: "ashMuted" },
  ],
  [
    { text: "  function", color: "irisSoft" },
    { text: ": ", color: "ashMuted" },
    { text: '"Distributed systems · web"', color: "signal" },
    { text: ",", color: "ashMuted" },
  ],
  [
    { text: "  status", color: "irisSoft" },
    { text: ":   ", color: "ashMuted" },
    { text: '"Open to collaboration"', color: "signal" },
    { text: ",", color: "ashMuted" },
  ],
  [
    { text: "  ai", color: "irisSoft" },
    { text: ":      ", color: "ashMuted" },
    { text: '"Claude Code · Copilot CLI · multi-agent"', color: "signal" },
    { text: ",", color: "ashMuted" },
  ],
  [{ text: "}", color: "ashMuted" }],
];

const FULL_TEXT = CODE_LINES.map((line) =>
  line.map((t) => t.text).join("")
).join("\n");

const CHAR_INTERVAL_MS = 22;

/** Given a total char count, build rendered lines up to that many chars. */
function buildVisibleLines(charCount: number): {
  lines: Lines;
  done: boolean;
} {
  const lines: Lines = [];
  let remaining = charCount;

  for (let li = 0; li < CODE_LINES.length; li++) {
    if (remaining <= 0) break;
    const codeLine = CODE_LINES[li];
    const lineTokens: Token[] = [];
    let lineComplete = true;

    for (const token of codeLine) {
      if (remaining <= 0) {
        lineComplete = false;
        break;
      }
      if (remaining >= token.text.length) {
        lineTokens.push({ text: token.text, color: token.color });
        remaining -= token.text.length;
      } else {
        lineTokens.push({
          text: token.text.slice(0, remaining),
          color: token.color,
        });
        remaining = 0;
        lineComplete = false;
        break;
      }
    }

    lines.push({ tokens: lineTokens, key: li });

    // consume the newline between lines
    if (lineComplete && li < CODE_LINES.length - 1) {
      remaining -= 1;
    }
  }

  const done = charCount >= FULL_TEXT.length + CODE_LINES.length - 1;
  return { lines, done };
}

const AuthorCodeSnippet = () => {
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const totalChars = FULL_TEXT.length + CODE_LINES.length - 1; // +newlines

  useTimeout(() => setIsTyping(true), 300);

  useInterval(
    () => {
      setCharCount((c) => {
        if (c >= totalChars) {
          setIsTyping(false);
          return c;
        }
        return c + 1;
      });
    },
    isTyping ? CHAR_INTERVAL_MS : null
  );

  const { lines, done } = buildVisibleLines(charCount);

  return (
    <Box
      fontFamily="mono"
      fontSize={{ base: "11px", md: "12px" }}
      lineHeight="1.75"
      borderRadius="6px"
      border="1px solid"
      borderColor="rule"
      overflow="hidden"
      maxW="520px"
    >
      {/* title bar */}
      <Flex
        align="center"
        gap={2}
        px={3}
        py="7px"
        borderBottom="1px solid"
        borderColor="rule"
        bg="canvasStrip"
      >
        <Flex gap="5px">
          {(["#FF5F57", "#FFBD2E", "#28C840"] as const).map((c, i) => (
            <Box
              key={i}
              w="9px"
              h="9px"
              borderRadius="full"
              bg={c}
              opacity={0.7}
            />
          ))}
        </Flex>
        <Box
          color="ashMuted"
          fontSize="10px"
          letterSpacing="0.18em"
          textTransform="uppercase"
          ml={1}
        >
          author.ts
        </Box>
      </Flex>

      {/* code body */}
      <Box px={{ base: 3, md: 4 }} py={3} bg="surface">
        <style>{`
          @keyframes cursor-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}</style>
        {lines.map(({ tokens, key }, lineIdx) => {
          const isLastLine = lineIdx === lines.length - 1;
          return (
            <Box key={key} display="block" whiteSpace="pre">
              {tokens.map((token, ti) => (
                <Box key={ti} as="span" color={token.color}>
                  {token.text}
                </Box>
              ))}
              {/* cursor on last visible line */}
              {isLastLine && (
                <Box
                  as="span"
                  display="inline-block"
                  w="1px"
                  h="12px"
                  bg="bone"
                  verticalAlign="middle"
                  ml="1px"
                  style={{
                    animation: "cursor-blink 1s step-end infinite",
                    animationPlayState: done ? "running" : "paused",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AuthorCodeSnippet;
