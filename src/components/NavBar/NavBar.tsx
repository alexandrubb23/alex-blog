import { Box, ClientOnly, HStack, Skeleton } from "@chakra-ui/react";

import { PagesList } from "./PagesList";

// Widths approximate each uppercase label at 11px mono + 0.22em letter-spacing:
// HOME(4), ABOUT ME(8), CERTIFICATIONS(14), CONTACT(7)
const NAV_ITEMS = [
  { w: "57.11px" },
  { w: "66.13px" },
  { w: "147.31px" },
  { w: "84.16px" },
];

const NavBarSkeleton = () => (
  <>
    {/* Desktop: mirrors MenuList gap/paddingY/height */}
    <Box
      as="ul"
      display="flex"
      alignItems="center"
      gap="20px"
      listStyleType="none"
      m={0}
      p={0}
      hideBelow="md"
      aria-hidden
    >
      {NAV_ITEMS.map(({ w }, i) => (
        <Box as="li" key={i} paddingY="6px">
          <Skeleton h="11px" w={w} borderRadius="2px" />
        </Box>
      ))}
    </Box>

    {/* Mobile: mirrors HamburgerButton (--bar-width: 30px, height: 2px*3 + 8px*2 = 22px) */}
    <Box hideFrom="md" aria-hidden>
      <Skeleton w="30px" h="22px" borderRadius="2px" />
    </Box>
  </>
);

const NavBar = () => (
  <HStack padding={{ lg: "10px" }}>
    <ClientOnly fallback={<NavBarSkeleton />}>
      <PagesList />
    </ClientOnly>
  </HStack>
);

export default NavBar;
