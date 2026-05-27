import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import { CornerTicks, PulsateDot } from "@/components/common";
import { useIsHomePage } from "@/hooks";
import { AboutAuthor } from "./AboutAuthor";
import { AuthorAvatar } from "./AuthorAvatar";
import { AuthorCodeSnippet } from "./AuthorCodeSnippet";
import { AuthorName } from "./AuthorName";

interface AuthorProps {
  name: string;
}

const SpecRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <Flex
    fontFamily="mono"
    fontSize={{ base: "11px", md: "12px" }}
    py="6px"
    borderBottom="1px dashed"
    borderColor="rule"
    align="baseline"
    gap={4}
  >
    <Box
      color="ashMuted"
      letterSpacing="0.22em"
      textTransform="uppercase"
      fontWeight="500"
      flexShrink={0}
      minW={{ base: "70px", md: "90px" }}
    >
      {label}
    </Box>
    <Box color="bone" fontWeight="500" letterSpacing="0.04em">
      {value}
    </Box>
  </Flex>
);

const Author = ({ name }: AuthorProps) => {
  const isHomePage = useIsHomePage();

  if (!isHomePage) return null;

  return (
    <Box
      position="relative"
      mt={{ base: 8, md: 14 }}
      mb={{ base: 6, md: 12 }}
      px={{ base: 0, md: 2 }}
      py={{ base: 8, md: 10 }}
      border="1px solid"
      borderColor="rule"
      bg="surface"
      backgroundImage="linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)"
      backgroundSize="48px 48px"
      backgroundPosition="center center"
    >
      <CornerTicks />

      {/* top meta strip */}
      <Flex
        justify="space-between"
        align="center"
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.22em"
        textTransform="uppercase"
        color="ashMuted"
        px={{ base: 4, md: 8 }}
        pb={{ base: 6, md: 8 }}
        wrap="wrap"
        gap={2}
      >
        <Box>
          <Box as="span" color="iris">
            //
          </Box>{" "}
          model_card / AB-001
        </Box>
        <Flex gap={2} align="center">
          <PulsateDot />
          <Box>online · available</Box>
        </Flex>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr auto" }}
        gap={{ base: 8, md: 12 }}
        px={{ base: 4, md: 8 }}
        alignItems="center"
      >
        <GridItem minW="0">
          <AuthorName name={name} />
          <Box mt={{ base: 6, md: 8 }}>
            <AuthorCodeSnippet />
          </Box>
          <Box mt={{ base: 4, md: 5 }} maxW="520px">
            <SpecRow
              label="Location"
              value={
                <>
                  Bucharest, Romania{" "}
                  <Box as="span" color="ashMuted">
                    · EET
                  </Box>
                </>
              }
            />
          </Box>
          <Box mt={{ base: 6, md: 8 }}>
            <AboutAuthor />
          </Box>
        </GridItem>

        {/* portrait with reticle */}
        <GridItem
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Box position="relative" w="180px" h="180px">
            <Box
              position="absolute"
              inset="-12px"
              border="1px solid"
              borderColor="iris"
              borderStyle="dashed"
              borderRadius="full"
              opacity={0.55}
              css={{
                animation: "rotate-reticle 32s linear infinite",
                "@keyframes rotate-reticle": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
            <Box
              borderRadius="full"
              overflow="hidden"
              border="1px solid"
              borderColor="rule"
              w="180px"
              h="180px"
              position="relative"
              boxShadow={{
                base: "0 0 0 6px rgba(107,78,155,0.06), 0 18px 36px -24px rgba(11,13,16,0.25)",
                _dark:
                  "0 0 0 6px rgba(139,92,246,0.10), 0 24px 48px -28px rgba(139,92,246,0.55)",
              }}
              css={{
                "& img": {
                  filter: "grayscale(0.45) contrast(1.08) brightness(0.92)",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <AuthorAvatar alt={name} fileName={AUTHOR.AVATAR} />
            </Box>
            {/* tiny coords label */}
            <Box
              position="absolute"
              bottom="-22px"
              left="50%"
              transform="translateX(-50%)"
              fontFamily="mono"
              fontSize="9px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="ashMuted"
              whiteSpace="nowrap"
            >
              44.43° N · 26.10° E
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Author;
