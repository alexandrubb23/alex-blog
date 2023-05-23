import { Button, HStack } from '@chakra-ui/react';

import { MenuProps } from '@/components/common/Menus/models';
import { useColorMode, useNavigationMenu } from '@/hooks';

const HorizontalMenu = ({ data }: MenuProps) => {
  const { isActiveItem, goToPage } = useNavigationMenu();
  const { isDark } = useColorMode();

  return (
    <HStack spacing={2} w='100%' fontSize='12px'>
      {data.map(item => {
        const isActive = isActiveItem(item.id);

        return (
          <Button
            bg={isActive ? 'blue.500' : 'none'}
            borderRadius='full'
            key={item.id}
            paddingX='10px'
            paddingY='2px'
            _hover={{
              bg: 'blue.500',
              color: 'white',
            }}
            onClick={() => goToPage(item.id)}
            height={7}
            fontSize='12px'
            fontWeight='normal'
            color={isDark || isActive ? 'white' : 'black'}
          >
            {item.title}
          </Button>
        );
      })}
    </HStack>
  );
};

export default HorizontalMenu;
