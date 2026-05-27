import { Box, Breadcrumb } from "@chakra-ui/react";
import { LuHome } from "react-icons/lu";

import icons from "@/data/icons";
import { GlobalLink } from "../Link";
import { usePostContext } from "./PostProvider";

const PageBreadcrumb = () => {
  const { topic, title } = usePostContext();

  const Icon = icons[topic];

  return (
    <Breadcrumb.Root w="100%" display="flex" justifyContent="center">
      <Breadcrumb.List
        listStyleType="none"
        fontFamily="mono"
        fontSize="11px"
        fontWeight="500"
        letterSpacing="0.2em"
        textTransform="uppercase"
        color="ashMuted"
        gap={1}
      >
        <Breadcrumb.Item>
          <GlobalLink
            href="/"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            color="iris"
            _hover={{ color: "irisSoft" }}
            transition="color 0.2s ease"
          >
            <LuHome />
            <Box as="span" hideBelow="md">
              Home
            </Box>
          </GlobalLink>
        </Breadcrumb.Item>
        <Breadcrumb.Separator color="ashMuted" opacity={0.5} />
        <Breadcrumb.Item>
          <GlobalLink
            href="/"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            color="iris"
            _hover={{ color: "irisSoft" }}
            transition="color 0.2s ease"
          >
            <Icon />
            <Box as="span" hideBelow="md">
              {topic}
            </Box>
          </GlobalLink>
        </Breadcrumb.Item>
        <Breadcrumb.Separator color="ashMuted" opacity={0.5} />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink
            color="ashMuted"
            fontSize="11px"
            lineHeight="1.3"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            maxWidth={{
              base: "20ch",
              sm: "40ch",
              md: "60ch",
              lg: "80ch",
              xl: "100ch",
              "2xl": "120ch",
            }}
          >
            {title}
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};

export default PageBreadcrumb;
