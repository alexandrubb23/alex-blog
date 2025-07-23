import { Box, Drawer, Portal, useDisclosure } from "@chakra-ui/react";

import { MenuProps } from "@/components/common/Menus/models";
import { MenuList } from "../MenuList";
import HamburgerButton from "./HamburgerButton";

const HamburgerMenu = ({ data }: MenuProps) => {
  const { open, onOpen, onClose } = useDisclosure();

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
              <Drawer.Body>
                <MenuList data={data} flexDirection="column" />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default HamburgerMenu;
