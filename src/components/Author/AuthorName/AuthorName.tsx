import { Box, Heading } from "@chakra-ui/react";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <Box>
      <Box
        fontFamily="mono"
        fontSize="10px"
        fontWeight="500"
        letterSpacing="0.32em"
        textTransform="uppercase"
        color="iris"
        mb={3}
      >
        // identity
      </Box>
      <Heading
        as="h1"
        fontFamily="display"
        fontWeight="700"
        fontSize={{ base: "48px", sm: "58px", md: "80px", lg: "104px" }}
        lineHeight={{ base: "0.95", md: "0.9" }}
        letterSpacing="-0.04em"
        color="bone"
        m={0}
        textTransform="uppercase"
      >
        <Box as="span" display="block">
          {first}
        </Box>
        <Box
          as="span"
          display="block"
          color="iris"
          textShadow={{
            base: "none",
            _dark:
              "0 0 24px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
          }}
        >
          {last}
        </Box>
      </Heading>
    </Box>
  );
};

export default AuthorName;
