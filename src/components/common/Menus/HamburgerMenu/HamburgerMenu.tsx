import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

import { MenuProps } from "@/components/common/Menus/models";
import { useNavigationMenu } from "@/hooks";

const HamburgerMenu = ({ data }: MenuProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const { isActiveItem, goToPage } = useNavigationMenu();

  return (
    <Box w="100%">
      <Menu.Root onExitComplete={onClose}>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" onClick={onOpen}>
            {open ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map(({ id, title, icon: Icon }) => {
                const additionalProps = Icon ? { icon: <Icon /> } : {};

                return (
                  <Menu.Item
                    key={id}
                    onClick={() => goToPage(id)}
                    {...additionalProps}
                    value={title}
                    color={isActiveItem(id) ? "blue.500" : undefined}
                  >
                    {title}
                  </Menu.Item>
                );
              })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default HamburgerMenu;
