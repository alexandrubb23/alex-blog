import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  LinkBox,
  VStack,
} from "@chakra-ui/react";
import { RiDownload2Fill } from "react-icons/ri";

import "@/app/global.css";

import { AUTHOR } from "@/app/constants";
import { Author, NavBar } from "@/components";
import Providers from "@/app/providers";
import SolidButton from "../Button/SolidButton";
import { LuVoicemail } from "react-icons/lu";
import { Divider } from "../Divider";

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Layout = ({ contentClassName, children }: LayoutProps) => (
  <Providers>
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
      }}
    >
      <GridItem area="header" bg="header" pb="54px">
        <Container
          margin="auto"
          padding="5"
          maxWidth={{
            base: "100%",
            sm: "100%",
            md: "container.md",
            lg: "container.lg",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <LinkBox fontFamily="libre" fontSize="28px" fontWeight="700">
              <Link href="/">AB</Link>
            </LinkBox>
            <NavBar />
            <Button
              variant="outline"
              border="2px solid"
              borderColor="black"
              borderRadius="2rem"
            >
              <RiDownload2Fill />
              My Resume
            </Button>
          </Box>
          <Author name={AUTHOR.NAME} />
        </Container>
      </GridItem>

      <GridItem
        area="main"
        className={contentClassName}
        maxWidth={{
          base: "100%",
          sm: "100%",
          md: "container.md",
          lg: "container.lg",
        }}
        margin="64px auto 64px auto"
        padding="5"
      >
        {children}
      </GridItem>

      <GridItem area="footer" color="white" textAlign="center" w="100%">
        <Box bg="primary" px={{ base: 4, md: 10 }} py={{ base: 10, md: 20 }}>
          <Box maxW="container" margin="auto">
            <VStack gap="24px">
              <Heading as="h3" fontSize="26px" fontWeight="500">
                Got a project in mind? Let’s chat and turn your ideas into
                impactful solutions!
              </Heading>
              <SolidButton visual="solidWhite">
                <Box as="span" mr={2} color="black">
                  Let&apos;s work together
                </Box>
              </SolidButton>
            </VStack>
          </Box>
        </Box>
        <VStack
          gap="40px"
          bg="black"
          px={{ base: 4, md: 10 }}
          py={{ base: 10, md: 20 }}
        >
          <Heading
            as="h4"
            fontSize="36px"
            fontWeight="400"
            color="white"
            fontFamily="nothingYouCouldDo"
          >
            Thank You!
          </Heading>
          <HStack gap="40px">
            <IconButton aria-label="Call support" rounded="full">
              <LuVoicemail />
            </IconButton>
            <IconButton aria-label="Call support" rounded="full">
              <LuVoicemail />
            </IconButton>
            <IconButton aria-label="Call support" rounded="full">
              <LuVoicemail />
            </IconButton>
            <IconButton aria-label="Call support" rounded="full">
              <LuVoicemail />
            </IconButton>
          </HStack>
          <Box fontSize="40px">
            {AUTHOR.EMAIL_ADDRESS}
            <Divider bg="white" height="5px" />
          </Box>
          <Box>
            © {new Date().getFullYear()} {AUTHOR.NAME}. All rights reserved.
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  </Providers>
);

export default Layout;
