import { Box, Button, Drawer, Portal, useDisclosure } from "@chakra-ui/react";
import { RiDownload2Line } from "react-icons/ri";

import { MenuProps } from "@/components/common/Menus/models";
import ResumeModal from "@/components/NavBar/ResumeModal";
import { MenuList } from "../MenuList";
import HamburgerButton from "./HamburgerButton";

const HamburgerMenu = ({ data }: MenuProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const {
    open: resumeOpen,
    onOpen: onResumeOpen,
    onClose: onResumeClose,
  } = useDisclosure();

  return (
    <Box w="100%" hideFrom="md">
      <Drawer.Root open={open} size="full">
        <HamburgerButton isOpen={open} onToggle={open ? onClose : onOpen} />
        <Portal>
          <Drawer.Positioner>
            <Drawer.Content
              backdropFilter="blur(20px)"
              backgroundColor="transparent"
            >
              <Drawer.Body
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                pb={10}
              >
                <MenuList
                  data={data}
                  flexDirection="column"
                  gap="48px"
                  fontSize="28px"
                />
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="outline"
                    border="1px solid"
                    borderColor="iris"
                    borderRadius="2px"
                    px={6}
                    py={3}
                    fontFamily="mono"
                    fontSize="11px"
                    fontWeight="600"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color="iris"
                    bg="graphite"
                    gap={2}
                    transition="background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease"
                    _hover={{
                      bg: "elevated",
                      boxShadow: "0 0 0 1px var(--iris)",
                    }}
                    onClick={onResumeOpen}
                  >
                    <Box as="span" fontWeight="700" mr="1">
                      ./
                    </Box>
                    resume
                    <RiDownload2Line size={14} />
                  </Button>
                </Box>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      <ResumeModal open={resumeOpen} onClose={onResumeClose} />
    </Box>
  );
};

export default HamburgerMenu;
