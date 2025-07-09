import { Box } from "@chakra-ui/react";

import { useAddClassToSpecificTags } from "@/hooks";
import type { HTMLObject } from "@/hooks/style/useAddClassToSpecificTags";
import utilStyles from "@/styles/post.module.css";
import CopyButtonsInjector from "../CopyButton/CopyButton";

const htmlObject: HTMLObject = {
  tags: ["pre", "code"],
  className: "language-js",
};

const PageBody = ({ children }: { children: string }) => {
  const tagsClass = useAddClassToSpecificTags(htmlObject);

  return (
    <>
      <CopyButtonsInjector />
      <Box
        className={utilStyles.post}
        dangerouslySetInnerHTML={{
          __html: tagsClass.applyClass(children),
        }}
      />
    </>
  );
};

export default PageBody;
