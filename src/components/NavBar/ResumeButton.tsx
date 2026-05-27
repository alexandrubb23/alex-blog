"use client";

import { Box, BoxProps, Button, useDisclosure } from "@chakra-ui/react";
import { RiDownload2Line } from "react-icons/ri";

import ResumeModal from "./ResumeModal";

const ResumeButton = (props: BoxProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex" hideBelow="md" {...props}>
      <Button
        variant="outline"
        border="1px solid"
        borderColor="iris"
        borderRadius="2px"
        px={4}
        py={2}
        fontFamily="mono"
        fontSize="11px"
        fontWeight="600"
        letterSpacing="0.2em"
        textTransform="uppercase"
        color="iris"
        bg="transparent"
        gap={2}
        transition="background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          bg: "irisGlow",
          boxShadow: {
            base: "0 0 0 1px var(--iris)",
            _dark: "0 0 0 1px var(--iris), 0 0 18px -4px rgba(139,92,246,0.55)",
          },
        }}
        onClick={onOpen}
      >
        <Box as="span" fontWeight="700" mr="1">
          ./
        </Box>
        resume
        <RiDownload2Line size={14} />
      </Button>

      <ResumeModal open={open} onClose={onClose} />
    </Box>
  );
};

export default ResumeButton;
