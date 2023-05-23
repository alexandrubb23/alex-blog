import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { MenuProps } from '@/components/common/Menus/models';
import { useNavigationMenu } from '@/hooks';

const HamburgerMenu = ({ data }: MenuProps) => {
  const { isActiveItem, goToPage } = useNavigationMenu();

  return (
    <Box w='100%'>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<RxHamburgerMenu />}
          variant='outline'
        />
        <MenuList w='100%'>
          {data.map(({ id, title, icon: Icon }) => {
            const additionalProps = Icon ? { icon: <Icon /> } : {};

            return (
              <MenuItem
                key={id}
                onClick={() => goToPage(id)}
                {...additionalProps}
                color={isActiveItem(id) ? 'blue.500' : undefined}
              >
                {title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
