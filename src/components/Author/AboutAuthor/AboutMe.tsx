"use client";

import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import { AUTHOR, ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import Container from "@/components/Layout/Container";
import { useNavigateToPage } from "@/hooks/router";
import { AuthorAvatar } from "../AuthorAvatar";

const AboutMe = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: "40px", md: "60px" }}
      >
        <Box textAlign="center">
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign="center"
            maxW="100%"
            mx="auto"
            px={{ base: 4, md: 0 }}
          >
            👋 Hello, I&apos;m {AUTHOR.NAME}, and I&apos;m excited to be here!
          </Heading>
        </Box>
        <Box textAlign="center" mx="auto">
          <AuthorAvatar />
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="24px">
          <GridItem>
            <Box>
              I&apos;m a seasoned Software Engineer with years of experience in
              the field. I hail from Romania, specifically Bucharest, where I
              was born and currently reside with my loving wife and two adorable
              kids.
            </Box>
          </GridItem>
          <GridItem gap="24px" display="flex" flexDirection="column">
            <Box>
              Throughout my career, I&apos;ve had the privilege of working on
              various projects for esteemed companies like Vodafone and Adidas,
              where I&apos;ve gained a lot of experience (expertise in domains
              such as gaming, payment systems, communication, and more.)
            </Box>
            <Box maxWidth="fit-content">
              <SolidAnimatedButton
                onClick={() => navigateToPage(ROUTES.CERTIFICATIONS)}
              >
                See my certifications
              </SolidAnimatedButton>
            </Box>
          </GridItem>
        </Grid>
        <Box maxW="100%" mx="auto" textAlign="center" px={{ base: 4, md: 0 }}>
          <Heading as="h2" size={{ base: "md", md: "lg" }} mb={2}>
            💡 I&apos;m deeply passionate about utilizing technology to solve
            complex problems and drive innovation. I take pride in my ability to
            adapt to different technologies and thrive in dynamic environments.
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }}
          gap="24px"
          alignItems="center"
        >
          <GridItem>
            <Image
              src="https://alexandrub.s3.us-east-1.amazonaws.com/IMG_0910.webp"
              alt="Author"
              boxSize="100%"
              mx="auto"
            />
          </GridItem>
          <GridItem display="flex" flexDirection="column" gap="24px">
            <Heading as="h3">
              🧘 Outside of coding, I&apos;m deeply dedicated to Hakko Ryu
              Jujutsu, a martial art that emphasizes balance, control, and inner
              harmony.
            </Heading>
            <Box>
              When I&apos;m not writing software, I dedicate time to training
              in 
              <strong>Hakko Denshin Ryu Jujutsu</strong>, a traditional Japanese
              martial art. I&apos;m honored to hold two dan ranks, and I proudly
              wear them in recognition of the discipline and growth this journey
              has brought me.
            </Box>
            <Box>
              You can see a photo of me with{" "}
              <strong>Soke Antonio Garcia</strong> wearing my two dans — a
              symbol not of mastery, but of continuous learning and dedication.
            </Box>
            <Box>
              The martial art I practice,{" "}
              <strong>Hakko Denshin Ryu Jujutsu</strong>, translates to{" "}
              <strong>Eight Directions Soft Technique</strong>, symbolizing the
              fluidity and adaptability I aim to embody—both in my martial arts
              journey and my work as a software engineer.
            </Box>
            <Box>
              Our dojo is named <strong>Senshinkan</strong>, meaning{" "}
              <strong>The place where you purify your mind and heart,</strong> a
              guiding principle in both practice and daily life.
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
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }}
          gap="24px"
          alignItems="center"
          justifyContent="center"
          mx="auto"
        >
          <GridItem display="flex" flexDirection="column" gap="24px">
            <Heading as="h3">🎮 My Other Passion: Arcade Games</Heading>
            <Box>
              Beyond martial arts and software, I have a deep passion for
              classic arcade gaming. I&apos;ve built an impressive collection of
              consoles and games over the years—including legendary systems like
              the Sega Genesis, Sony PlayStation (PSX), Nintendo Entertainment
              System (NES), Super Nintendo (SNES), and the iconic Neo Geo.
            </Box>
            <Box>
              🕹️ I also own full-sized arcade cabinets, bringing the authentic
              arcade experience right into my home. For me, it&apos;s not just
              nostalgia—it&apos;s about preserving a piece of gaming history and
              celebrating the creativity, design, and joy these systems continue
              to inspire.
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="/images/street-fighter-2-arcade-cabinet.jpg"
              alt="Arcade Cabinet"
              boxSize="80%"
              mx="auto"
            />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutMe;
