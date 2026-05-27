"use client";

import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import { AUTHOR, ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import Container from "@/components/Layout/Container";
import { CornerTicks } from "@/components/common";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import { DoubleSeparator } from "@/components/common/DoubleSeparator";
import { useNavigateToPage } from "@/hooks/router";
import { AuthorAvatar } from "../AuthorAvatar";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <Box
    fontFamily="mono"
    fontSize="10px"
    fontWeight="500"
    letterSpacing="0.32em"
    textTransform="uppercase"
    color="iris"
    mb={3}
  >
    {children}
  </Box>
);

const StatRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <Flex
    fontFamily="mono"
    fontSize={{ base: "11px", md: "12px" }}
    py="7px"
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
      minW={{ base: "72px", md: "90px" }}
    >
      {label}
    </Box>
    <Box color="bone" fontWeight="500" letterSpacing="0.04em">
      {value}
    </Box>
  </Flex>
);

const CAREER_LOG = [
  ["vodafone", "telecom · communication"],
  ["adidas", "e-commerce · global scale"],
  ["payment systems", "fintech · security"],
  ["dist. systems", "architecture · ongoing"],
] as const;

const AboutMe = () => {
  const navigateToPage = useNavigateToPage();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: "64px", md: "96px" }}
        py={{ base: 10, md: 16 }}
      >
        {/* ── HERO ── */}
        <AnimationScroll offset={0}>
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-start" }}
            gap={4}
          >
            <SectionLabel>// sys.profile / AB-001</SectionLabel>
            <Heading
              as="h1"
              fontFamily="display"
              fontWeight="700"
              fontSize={{ base: "56px", sm: "72px", md: "100px", lg: "124px" }}
              lineHeight="0.92"
              letterSpacing="-0.04em"
              textTransform="uppercase"
              color="bone"
              m={0}
              textAlign={{ base: "center", md: "left" }}
            >
              About
              <Box
                as="span"
                display="block"
                color="iris"
                textShadow={{
                  base: "none",
                  _dark:
                    "0 0 32px rgba(139,92,246,0.4), 0 0 80px rgba(139,92,246,0.18)",
                }}
              >
                Me.
              </Box>
            </Heading>
            <Box
              fontFamily="body"
              fontSize={{ base: "17px", md: "20px" }}
              lineHeight="1.6"
              color="ash"
              maxW="540px"
              textAlign={{ base: "center", md: "left" }}
            >
              Software engineer, martial artist, and arcade archivist — building
              systems that scale and sharing what I learn along the way.
            </Box>
          </Flex>
        </AnimationScroll>

        {/* ── IDENTITY CARD ── */}
        <AnimationScroll offset={0}>
          <Box
            position="relative"
            border="1px solid"
            borderColor="rule"
            bg="surface"
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 8 }}
            backgroundImage="linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)"
            backgroundSize="48px 48px"
          >
            <CornerTicks />
            <Grid
              templateColumns={{ base: "1fr", md: "auto 1fr" }}
              gap={{ base: 8, md: 12 }}
              alignItems="center"
            >
              {/* avatar with reticle */}
              <GridItem
                display="flex"
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                <Box position="relative" w="160px" h="160px">
                  <Box
                    position="absolute"
                    inset="-10px"
                    border="1px solid"
                    borderColor="iris"
                    borderStyle="dashed"
                    borderRadius="full"
                    opacity={0.5}
                    css={{
                      animation: "rotate-reticle 28s linear infinite",
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
                    w="160px"
                    h="160px"
                    position="relative"
                    css={{
                      "& img": {
                        filter: "grayscale(0.35) contrast(1.08)",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    }}
                    boxShadow={{
                      base: "0 0 0 5px rgba(107,78,155,0.06)",
                      _dark:
                        "0 0 0 5px rgba(139,92,246,0.12), 0 20px 40px -20px rgba(139,92,246,0.5)",
                    }}
                  >
                    <AuthorAvatar alt={AUTHOR.NAME} fileName={AUTHOR.AVATAR} />
                  </Box>
                </Box>
              </GridItem>

              {/* spec rows */}
              <GridItem>
                <SectionLabel>// identity</SectionLabel>
                <StatRow label="Name" value={AUTHOR.NAME} />
                <StatRow label="Role" value="Software Engineer" />
                <StatRow label="Focus" value="Distributed systems · web" />
                <StatRow
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
                <StatRow
                  label="Status"
                  value={
                    <Flex align="center" gap={2}>
                      <Box
                        w="6px"
                        h="6px"
                        bg="signal"
                        borderRadius="full"
                        flexShrink={0}
                        css={{
                          animation: "pulse-dot 2s ease-in-out infinite",
                          "@keyframes pulse-dot": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0.3 },
                          },
                        }}
                      />
                      <Box>Open to collaboration</Box>
                    </Flex>
                  }
                />
              </GridItem>
            </Grid>
          </Box>
        </AnimationScroll>

        <DoubleSeparator mt={0} mb={0} />

        {/* ── BACKGROUND ── */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 14 }}
          alignItems="start"
        >
          <GridItem>
            <AnimationScroll
              direction="right"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              <SectionLabel>// background</SectionLabel>
              <Heading
                as="h2"
                fontFamily="display"
                fontWeight="700"
                fontSize={{ base: "34px", md: "42px", lg: "52px" }}
                letterSpacing="-0.025em"
                lineHeight="1.05"
                textTransform="uppercase"
                color="bone"
                m={0}
              >
                Who am{" "}
                <Box as="span" color="iris">
                  I?
                </Box>
              </Heading>
              <Box
                fontFamily="body"
                fontSize={{ base: "16px", md: "17px" }}
                lineHeight="1.75"
                color="bone"
                letterSpacing="0.005em"
              >
                I&apos;m a seasoned Software Engineer from Bucharest, Romania —
                where I live with my wife and two kids. Over the years I&apos;ve
                worked on projects for companies like{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Vodafone
                </Box>{" "}
                and{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Adidas
                </Box>
                , building expertise across gaming, payment systems, and
                communications infrastructure.
              </Box>
              <Box
                fontFamily="body"
                fontSize={{ base: "15px", md: "16px" }}
                lineHeight="1.7"
                color="ash"
              >
                I&apos;m deeply passionate about applying technology to solve
                complex problems — adapting to new stacks and thriving in
                dynamic environments is what I do best.
              </Box>
            </AnimationScroll>
          </GridItem>

          <GridItem>
            <AnimationScroll
              direction="left"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              {/* career log terminal */}
              <Box
                fontFamily="mono"
                fontSize={{ base: "11px", md: "12px" }}
                lineHeight="1.75"
                borderRadius="6px"
                border="1px solid"
                borderColor="rule"
                overflow="hidden"
              >
                <Flex
                  align="center"
                  gap={2}
                  px={3}
                  py="7px"
                  borderBottom="1px solid"
                  borderColor="rule"
                  bg="canvasStrip"
                >
                  <Flex gap="5px">
                    {(["#FF5F57", "#FFBD2E", "#28C840"] as const).map(
                      (c, i) => (
                        <Box
                          key={i}
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={c}
                          opacity={0.7}
                        />
                      )
                    )}
                  </Flex>
                  <Box
                    color="ashMuted"
                    fontSize="10px"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    ml={1}
                  >
                    career.log
                  </Box>
                </Flex>
                <Box
                  px={4}
                  py={3}
                  bg="surface"
                  display="flex"
                  flexDirection="column"
                  gap={1}
                >
                  {CAREER_LOG.map(([company, detail]) => (
                    <Box key={company} display="flex" gap={3}>
                      <Box color="iris" minW="14ch">
                        {company}
                      </Box>
                      <Box color="ash">{detail}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box maxWidth="fit-content">
                <SolidAnimatedButton
                  onClick={() => navigateToPage(ROUTES.CERTIFICATIONS)}
                >
                  See my certifications
                </SolidAnimatedButton>
              </Box>
            </AnimationScroll>
          </GridItem>
        </Grid>

        <DoubleSeparator mt={0} mb={0} />

        {/* ── MARTIAL ARTS ── */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, md: 14 }}
          alignItems="center"
        >
          <GridItem>
            <AnimationScroll
              direction="right"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              <SectionLabel>// discipline · hakko_denshin_ryu</SectionLabel>
              <Heading
                as="h2"
                fontFamily="display"
                fontWeight="700"
                fontSize={{ base: "34px", md: "42px", lg: "52px" }}
                letterSpacing="-0.025em"
                lineHeight="1.05"
                textTransform="uppercase"
                color="bone"
                m={0}
              >
                Martial{" "}
                <Box as="span" color="iris">
                  Arts
                </Box>
              </Heading>
              <Box
                fontFamily="body"
                fontSize={{ base: "16px", md: "17px" }}
                lineHeight="1.75"
                color="bone"
                letterSpacing="0.005em"
              >
                When I&apos;m not writing software, I dedicate time to{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Hakko Denshin Ryu Jujutsu
                </Box>{" "}
                — a traditional Japanese martial art I hold two dan ranks in. I
                practice at our dojo{" "}
                <Box as="span" fontWeight="600">
                  Senshinkan
                </Box>{" "}
                (
                <Box as="span" color="ashMuted" fontStyle="italic">
                  the place where you purify your mind and heart
                </Box>
                ).
              </Box>
              <Box
                fontFamily="body"
                fontSize={{ base: "15px", md: "16px" }}
                lineHeight="1.7"
                color="ash"
              >
                The art translates to{" "}
                <Box as="span" fontWeight="600" color="bone">
                  Eight Directions Soft Technique
                </Box>{" "}
                — symbolising the fluidity and adaptability I aim to carry both
                on the mat and in my engineering work. Pictured with{" "}
                <Box as="span" fontWeight="600" color="bone">
                  Soke Antonio Garcia
                </Box>
                .
              </Box>
              <Box maxWidth="fit-content">
                <SolidAnimatedButton
                  onClick={() =>
                    window.open("https://hakko-denshin-ryu.com", "_blank")
                  }
                >
                  hakko-denshin-ryu.com
                </SolidAnimatedButton>
              </Box>
            </AnimationScroll>
          </GridItem>

          <GridItem>
            <AnimationScroll direction="left">
              <Box
                position="relative"
                border="1px solid"
                borderColor="rule"
                overflow="hidden"
              >
                <CornerTicks color="iris" size="12px" />
                <Image
                  src="https://alexandrub.s3.us-east-1.amazonaws.com/IMG_0910.webp"
                  alt="Alexandru Barbulescu with Soke Antonio Garcia"
                  display="block"
                  w="100%"
                  css={{
                    filter: "contrast(1.06) brightness(0.94)",
                  }}
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  bg="rgba(11,13,16,0.72)"
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color="ashMuted"
                >
                  With Soke Antonio Garcia · Two Dan
                </Box>
              </Box>
            </AnimationScroll>
          </GridItem>
        </Grid>

        <DoubleSeparator mt={0} mb={0} />

        {/* ── AI WORKFLOW ── */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 14 }}
          alignItems="start"
        >
          <GridItem>
            <AnimationScroll
              direction="right"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              <SectionLabel>// ai_workflow · multi_agent</SectionLabel>
              <Heading
                as="h2"
                fontFamily="display"
                fontWeight="700"
                fontSize={{ base: "34px", md: "42px", lg: "52px" }}
                letterSpacing="-0.025em"
                lineHeight="1.05"
                textTransform="uppercase"
                color="bone"
                m={0}
              >
                AI{" "}
                <Box as="span" color="iris">
                  Agents
                </Box>
              </Heading>
              <Box
                fontFamily="body"
                fontSize={{ base: "16px", md: "17px" }}
                lineHeight="1.75"
                color="bone"
                letterSpacing="0.005em"
              >
                I&apos;m genuinely excited about the new frontier of AI-assisted
                engineering. Working with{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Claude Code
                </Box>{" "}
                and{" "}
                <Box as="span" color="iris" fontWeight="600">
                  GitHub Copilot CLI
                </Box>{" "}
                has fundamentally changed how I approach complex problems —
                spinning up multiple specialised sub-agents in parallel to
                tackle security audits, code reviews, test generation, and
                architecture analysis simultaneously.
              </Box>
              <Box
                fontFamily="body"
                fontSize={{ base: "15px", md: "16px" }}
                lineHeight="1.7"
                color="ash"
              >
                The ability to orchestrate agents concurrently — each focused on
                a distinct concern — compresses feedback loops that once took
                hours into minutes. It&apos;s the kind of leverage that makes
                ambitious systems feel tractable.
              </Box>
            </AnimationScroll>
          </GridItem>

          <GridItem>
            <AnimationScroll
              direction="left"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              {/* agent dispatch terminal */}
              <Box
                fontFamily="mono"
                fontSize={{ base: "11px", md: "12px" }}
                lineHeight="1.75"
                borderRadius="6px"
                border="1px solid"
                borderColor="rule"
                overflow="hidden"
              >
                <Flex
                  align="center"
                  gap={2}
                  px={3}
                  py="7px"
                  borderBottom="1px solid"
                  borderColor="rule"
                  bg="canvasStrip"
                >
                  <Flex gap="5px">
                    {(["#FF5F57", "#FFBD2E", "#28C840"] as const).map(
                      (c, i) => (
                        <Box
                          key={i}
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={c}
                          opacity={0.7}
                        />
                      )
                    )}
                  </Flex>
                  <Box
                    color="ashMuted"
                    fontSize="10px"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    ml={1}
                  >
                    agent.dispatch
                  </Box>
                </Flex>
                <Box
                  px={4}
                  py={3}
                  bg="surface"
                  display="flex"
                  flexDirection="column"
                  gap={1}
                >
                  {(
                    [
                      ["security-auditor", "scanning · vulnerabilities"],
                      ["code-reviewer", "quality · best-practices"],
                      ["test-generator", "coverage · edge-cases"],
                      ["arch-analyst", "design · trade-offs"],
                    ] as const
                  ).map(([agent, detail]) => (
                    <Box key={agent} display="flex" gap={3}>
                      <Box color="iris" minW="16ch">
                        {agent}
                      </Box>
                      <Box color="ash">{detail}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimationScroll>
          </GridItem>
        </Grid>

        <DoubleSeparator mt={0} mb={0} />

        {/* ── ARCADE / GAMING ── */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, md: 14 }}
          alignItems="center"
        >
          <GridItem order={{ base: 2, lg: 1 }}>
            <AnimationScroll direction="left">
              <Box
                position="relative"
                border="1px solid"
                borderColor="rule"
                overflow="hidden"
              >
                <CornerTicks color="iris" size="12px" />
                <Image
                  src="/images/street-fighter-2-arcade-cabinet.jpg"
                  alt="Street Fighter II Arcade Cabinet"
                  display="block"
                  w="100%"
                  css={{
                    filter: "contrast(1.06) brightness(0.9) saturate(1.1)",
                  }}
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  px={3}
                  py={2}
                  bg="rgba(11,13,16,0.72)"
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color="ashMuted"
                >
                  Street Fighter II · CAPCOM 1991
                </Box>
              </Box>
            </AnimationScroll>
          </GridItem>

          <GridItem order={{ base: 1, lg: 2 }}>
            <AnimationScroll
              direction="right"
              display="flex"
              flexDirection="column"
              gap={5}
            >
              <SectionLabel>// archive · classic_gaming</SectionLabel>
              <Heading
                as="h2"
                fontFamily="display"
                fontWeight="700"
                fontSize={{ base: "34px", md: "42px", lg: "52px" }}
                letterSpacing="-0.025em"
                lineHeight="1.05"
                textTransform="uppercase"
                color="bone"
                m={0}
              >
                Arcade{" "}
                <Box as="span" color="iris">
                  Games
                </Box>
              </Heading>
              <Box
                fontFamily="body"
                fontSize={{ base: "16px", md: "17px" }}
                lineHeight="1.75"
                color="bone"
                letterSpacing="0.005em"
              >
                Beyond code and martial arts, I have a deep passion for classic
                arcade gaming. I&apos;ve built a collection spanning{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Sega Genesis
                </Box>
                ,{" "}
                <Box as="span" color="iris" fontWeight="600">
                  PlayStation (PSX)
                </Box>
                ,{" "}
                <Box as="span" color="iris" fontWeight="600">
                  NES
                </Box>
                ,{" "}
                <Box as="span" color="iris" fontWeight="600">
                  SNES
                </Box>
                , and the iconic{" "}
                <Box as="span" color="iris" fontWeight="600">
                  Neo Geo
                </Box>
                .
              </Box>
              <Box
                fontFamily="body"
                fontSize={{ base: "15px", md: "16px" }}
                lineHeight="1.7"
                color="ash"
              >
                I also own full-sized arcade cabinets — bringing the authentic
                experience home. For me it&apos;s not just nostalgia; it&apos;s
                about preserving gaming history and celebrating the creativity
                these systems continue to inspire.
              </Box>
            </AnimationScroll>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutMe;
