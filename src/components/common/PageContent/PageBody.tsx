import { Box } from "@chakra-ui/react";

import { useAddClassToSpecificTags } from "@/hooks";
import { useAnimateOnScroll } from "@/hooks/layout";
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
  const { content } = usePostContext();
  const tagsClass = useAddClassToSpecificTags(htmlObject);

  useAnimateOnScroll({
    rootSelector: `#${ROOT_SELECTOR}`,
    animation: {
      transition: {
        duration: 0.7,
        ease: "ease-in-out",
      },
    },
  });

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
        }}
      />
    </>
  );
};

export default PageBody;
