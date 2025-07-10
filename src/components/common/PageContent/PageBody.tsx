import { Box } from "@chakra-ui/react";

import { useAddClassToSpecificTags } from "@/hooks";
import type { HTMLObject } from "@/hooks/style/useAddClassToSpecificTags";
import utilStyles from "@/styles/post.module.css";
import CopyButtonsInjector from "../CopyButton/CopyButton";
import { usePostContext } from "./PostProvider";

const htmlObject: HTMLObject = {
  tags: ["pre", "code"],
  className: "language-js",
};

const PageBody = () => {
  const { content } = usePostContext();
  const tagsClass = useAddClassToSpecificTags(htmlObject);

  return (
    <>
      <CopyButtonsInjector />
      <Box
        className={utilStyles.post}
        dangerouslySetInnerHTML={{
          __html: tagsClass.applyClass(content),
        }}
      />
    </>
  );
};

export default PageBody;
