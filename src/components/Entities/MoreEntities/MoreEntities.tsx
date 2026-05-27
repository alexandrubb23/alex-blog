import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { CornerTicks, Date } from "@/components/common";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import PostLink from "@/components/common/Link/PostLink";
import { useIsNotMobile } from "@/hooks";
import { isEven } from "@/utils/bool";
import { formatReadingTime } from "@/utils/formatReadingTime";

interface MoreEntitiesProps {
  data: PostData[];
}

const shortId = (id: string) => id.slice(0, 6).toUpperCase();

const MoreEntities = ({ data }: MoreEntitiesProps) => {
  const isNotMobile = useIsNotMobile();

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={{ base: 4, md: 6 }}
      mt={{ base: 6, md: 8 }}
    >
      {data.map((post, index) => {
        const { content, date, id, image, title } = post;
        const readingTime = formatReadingTime(content, id);

        return (
          <GridItem key={id} w="100%">
            <AnimationScroll
              animation="backInOut"
              key={isNotMobile ? id : `${id}-${index}`}
              direction={
                isNotMobile ? (isEven(index) ? "right" : "left") : "up"
              }
              duration={1}
            >
              <PostLink slug={id}>
                <Box
                  role="group"
                  border="1px solid"
                  borderColor="rule"
                  bg="elevated"
                  position="relative"
                  transition="border-color 0.25s ease, transform 0.25s ease"
                  _hover={{
                    borderColor: "iris",
                    transform: "translateY(-2px)",
                  }}
                  css={{
                    "& .more-image": {
                      transition:
                        "filter 0.4s ease, transform 0.6s cubic-bezier(0.2,0.7,0.2,1)",
                    },
                    "&:hover .more-image": {
                      filter: "grayscale(0) contrast(1.02)",
                      transform: "scale(1.04)",
                    },
                    "&:hover .more-title": { color: "var(--iris)" },
                    "&:hover .more-action": { color: "var(--iris)" },
                    "&:hover .more-action-arrow": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <CornerTicks
                    corners={["tl", "br"]}
                    size="10px"
                    offset="-1px"
                    hoverOnly
                  />

                  {/* image with frame */}
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderBottom="1px solid"
                    borderColor="rule"
                    h={{ base: "200px", md: "220px" }}
                    bg="canvasStrip"
                  >
                    <Image
                      className="more-image"
                      alt={title}
                      h="100%"
                      w="100%"
                      objectFit="cover"
                      src={image}
                      filter="grayscale(0.5) contrast(1.05) brightness(0.92)"
                    />
                    {/* scanline veneer (dark mode only) */}
                    <Box
                      position="absolute"
                      inset="0"
                      pointerEvents="none"
                      opacity={{ base: 0, _dark: 0.35 }}
                      backgroundImage="repeating-linear-gradient(0deg, rgba(11,13,16,0.5) 0 1px, transparent 1px 3px)"
                      mixBlendMode="multiply"
                    />
                    {/* status pill */}
                    <Flex
                      position="absolute"
                      top="10px"
                      left="10px"
                      align="center"
                      gap={1.5}
                      px="8px"
                      py="3px"
                      bg="elevated"
                      border="1px solid"
                      borderColor="rule"
                      fontFamily="mono"
                      fontSize="9px"
                      fontWeight="600"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="bone"
                    >
                      <Box as="span" color="iris">
                        [{shortId(id)}]
                      </Box>
                      <Box as="span" w="1px" h="9px" bg="rule" />
                      <Box as="span" color="ashMuted">
                        log
                      </Box>
                    </Flex>
                  </Box>

                  {/* body */}
                  <Box p={{ base: 4, md: 5 }}>
                    <Flex
                      align="center"
                      gap={3}
                      fontFamily="mono"
                      fontSize="10px"
                      letterSpacing="0.22em"
                      textTransform="uppercase"
                      color="ashMuted"
                      mb={3}
                    >
                      <Box>{readingTime}</Box>
                      <Box w="14px" h="1px" bg="currentColor" opacity={0.45} />
                      <Date dateString={date} />
                    </Flex>

                    <Heading
                      as="h3"
                      className="more-title"
                      fontFamily="display"
                      fontWeight="600"
                      fontSize={{ base: "20px", md: "24px" }}
                      lineHeight="1.2"
                      letterSpacing="-0.015em"
                      color="bone"
                      m={0}
                      transition="color 0.2s ease"
                    >
                      {title}
                    </Heading>

                    <Flex
                      align="center"
                      gap={2}
                      mt={5}
                      pt={4}
                      borderTop="1px dashed"
                      borderColor="rule"
                      className="more-action"
                      fontFamily="mono"
                      fontSize="11px"
                      fontWeight="600"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="ash"
                      transition="color 0.2s ease"
                    >
                      <Box as="span" color="iris">
                        &gt;_
                      </Box>
                      <Box as="span">open transmission</Box>
                      <Box
                        as="span"
                        className="more-action-arrow"
                        display="inline-block"
                        ml={1}
                        transition="transform 0.25s cubic-bezier(0.2,0.7,0.2,1)"
                      >
                        →
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </PostLink>
            </AnimationScroll>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MoreEntities;
