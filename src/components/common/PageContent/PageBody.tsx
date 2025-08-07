import { Box } from "@chakra-ui/react";

import { useColorMode } from "@/components/ui/color-mode";
import { useAddClassToSpecificTags } from "@/hooks";
import { useAnimateOnScroll, useLazyLoadInjector } from "@/hooks/layout";
import type { HTMLObject } from "@/hooks/style/useAddClassToSpecificTags";
import utilStyles from "@/styles/post.module.css";
import CopyButtonsInjector from "../CopyButton/CopyButton";
import { usePostContext } from "./PostProvider";

const htmlObject: HTMLObject = {
  tags: ["pre", "code"],
  className: "language-js",
};

const ROOT_SELECTOR = "content-container";

const PageBody = () => {
  useLazyLoadInjector();

  useAnimateOnScroll({
    rootSelector: `#${ROOT_SELECTOR}`,
    animation: {
      transition: {
        duration: 0.7,
        ease: "ease-in-out",
      },
    },
    threshold: 0.2,
  });

  const { isDark } = useColorMode();
  const { content } = usePostContext();
  const tagsClass = useAddClassToSpecificTags(htmlObject);

  return (
    <>
      <CopyButtonsInjector />

      <Box
        id={ROOT_SELECTOR}
        className={utilStyles.post}
        dangerouslySetInnerHTML={{
          __html: tagsClass.applyClass(content),
        }}
        css={{
          "& p": { opacity: 0 },
          "& ul": { opacity: 0 },
          "& h1, & h2, & h3, & h4, & h5, & h6": { opacity: 0 },
          "& a": { color: isDark ? "primary" : "gray.950" },
          "& pre": { opacity: 0 },
          "& img": {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            display: "block",
            margin: "1rem auto", // Center images and add some spacing
          },
          "& a:hover": {
            color: isDark ? "#B9A8FB" : "primary",
            textDecoration: "underline",
          },
        }}
      />
    </>
  );
};

export default PageBody;
