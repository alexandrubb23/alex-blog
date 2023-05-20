import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';

import { MenuProps } from '@/components/common/Menus/models';

const HamburgerMenu = ({ data }: MenuProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleMenuItemClick = (href: string) => {
    router.push(href);
  };

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
            const isActive = pathName.replace(/^\/(.+)/, '$1') === id;
            const additionalProps = Icon ? { icon: <Icon /> } : {};

            return (
              <MenuItem
                key={id}
                onClick={() => handleMenuItemClick(id)}
                {...additionalProps}
                color={isActive ? 'blue.500' : undefined}
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
