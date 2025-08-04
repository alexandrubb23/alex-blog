"use client";

import {
  ChakraProvider,
  Clipboard,
  defaultSystem,
  IconButton,
} from "@chakra-ui/react";
import { useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { FaCheck } from "react-icons/fa6";

export const CopyButton = ({ value }: { value: string }) => {
  return (
    <Clipboard.Root value={value}>
      <Clipboard.Trigger asChild>
        <IconButton variant="surface" size="xs">
          <Clipboard.Indicator copied={<FaCheck color="green" />} />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};

const CopyButtonsInjector = () => {
  useLayoutEffect(() => {
    const pres = document.querySelectorAll("pre");

    pres.forEach((pre) => {
      if (pre.querySelector(".copy-btn-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "copy-btn-wrapper";
      wrapper.style.position = "absolute";
      wrapper.style.top = "0.5rem";
      wrapper.style.right = "0.5rem";
      wrapper.style.zIndex = "10";

      pre.style.position = "relative";
      pre.appendChild(wrapper);

      const value = pre.textContent || "";
      if (!value) return;

      const root = createRoot(wrapper);
      root.render(
        <ChakraProvider value={defaultSystem}>
          <CopyButton value={value} />
        </ChakraProvider>,
      );
    });
  });

  return null;
};

export default CopyButtonsInjector;
