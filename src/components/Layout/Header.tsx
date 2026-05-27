import { Box, Container, Flex, GridItem, LinkBox } from "@chakra-ui/react";
import Link from "next/link";

import { AUTHOR } from "@/app/constants";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Author, NavBar } from "..";
import { AccentColorSwitcher } from "../NavBar/AccentColorSwitcher";
import ResumeButton from "../NavBar/ResumeButton";

const Header = () => (
  <GridItem
    area="header"
    bg="graphite"
    borderBottom="1px solid"
    borderColor="rule"
    position="relative"
  >
    {/* telemetry strip */}
    <Box
      borderBottom="1px solid"
      borderColor="rule"
      bg="canvasStrip"
      fontFamily="mono"
      fontSize="10px"
      fontWeight="500"
      letterSpacing="0.18em"
      textTransform="uppercase"
      color="ashMuted"
    >
      <Container
        margin="auto"
        py="6px"
        px={{ base: "1.25rem", md: "2rem" }}
        maxWidth={{
          base: "100%",
          sm: "100%",
          md: "container.md",
          lg: "container.lg",
        }}
      >
        <Flex justify="space-between" align="center" gap={4} wrap="wrap">
          <Flex gap={5} align="center">
            <Box>
              <Box as="span" color="signal" mr="6px">
                ●
              </Box>
              SYS / ONLINE
            </Box>
            <Box display={{ base: "none", md: "block" }}>NODE: AB-001</Box>
            <Box display={{ base: "none", md: "block" }}>
              BUILD: 2026.05 / v4.7
            </Box>
          </Flex>
          <Flex gap={4} align="center">
            <AccentColorSwitcher />
            <ColorModeButton size="xs" variant="ghost" color="ashMuted" />
            <Box display={{ base: "none", sm: "block" }}>LOC: EET</Box>
            <Box>
              <Box as="span" color="iris">
                ◇
              </Box>{" "}
              SECURE
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>

    <Container
      margin="auto"
      padding={{ base: "1rem 1.25rem", md: "1.25rem 2rem" }}
      maxWidth={{
        base: "100%",
        sm: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
    >
      <Flex justify="space-between" align="center" gap={4}>
        <LinkBox flexShrink={0}>
          <Link href="/">
            <Flex align="center" gap="0.65rem">
              {/* monogram tile */}
              <Box
                w="32px"
                h="32px"
                border="1px solid"
                borderColor="iris"
                bg="irisGlow"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontFamily="mono"
                fontWeight="700"
                fontSize="13px"
                color="iris"
                position="relative"
                css={{
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    width: "5px",
                    height: "5px",
                    border: "1px solid var(--iris)",
                  },
                  "&::before": {
                    top: "-2px",
                    left: "-2px",
                    borderRight: "none",
                    borderBottom: "none",
                  },
                  "&::after": {
                    bottom: "-2px",
                    right: "-2px",
                    borderLeft: "none",
                    borderTop: "none",
                  },
                }}
              >
                ab
              </Box>
              <Box
                fontFamily="mono"
                fontSize={{ base: "11px", md: "12px" }}
                fontWeight="600"
                letterSpacing="0.24em"
                textTransform="uppercase"
                color="bone"
              >
                INSTANCE_AB001
                <Box as="span" color="ash" ml={2} fontWeight="400">
                  /
                </Box>
                <Box as="span" color="ash" ml={2} fontWeight="400">
                  active
                </Box>
              </Box>
            </Flex>
          </Link>
        </LinkBox>
        <Flex align="center" gap={3}>
          <NavBar />
          <ResumeButton />
        </Flex>
      </Flex>
      <Author name={AUTHOR.NAME} />
    </Container>
  </GridItem>
);

export default Header;
