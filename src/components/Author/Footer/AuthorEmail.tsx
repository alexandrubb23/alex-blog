import { Box, Link } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";

const AuthorEmail = () => (
  <AnimationScroll fontSize="20px" wait={1.3} direction="down">
    <Box display="flex" alignItems="center" gap={2}>
      <Box
        as="span"
        fontFamily="mono"
        color="iris"
        fontSize={{ base: "14px", md: "18px" }}
        fontWeight="600"
      >
        &gt;
      </Box>
      <Link
        href={`mailto:${AUTHOR.EMAIL_ADDRESS}`}
        fontFamily="mono"
        fontSize={{ base: "14px", md: "18px" }}
        fontWeight="500"
        color="bone"
        letterSpacing="0.02em"
        transition="color 0.2s ease"
        borderBottom="1px dashed"
        borderColor="ashMuted"
        paddingBottom="2px"
        _hover={{ color: "iris", textDecoration: "none", borderColor: "iris" }}
      >
        {AUTHOR.EMAIL_ADDRESS}
      </Link>
    </Box>
  </AnimationScroll>
);

export default AuthorEmail;
