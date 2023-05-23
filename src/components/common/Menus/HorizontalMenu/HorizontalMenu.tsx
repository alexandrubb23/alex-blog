import { Button, HStack } from '@chakra-ui/react';

import { MenuProps } from '@/components/common/Menus/models';
import { useNavigationMenu } from '@/hooks';

const HorizontalMenu = ({ data }: MenuProps) => {
  const { isActiveItem, goToPage } = useNavigationMenu();

  return (
    <HStack spacing={2} w='100%' fontSize='12px'>
      {data.map(item => (
        <Button
          bg={isActiveItem(item.id) ? 'blue.500' : '#282B36'}
          borderRadius='full'
          key={item.id}
          paddingX='10px'
          paddingY='2px'
          _hover={{
            bg: 'blue.500',
          }}
          onClick={() => goToPage(item.id)}
          height={7}
          fontSize='12px'
          fontWeight='normal'
          color='white'
        >
          {item.title}
        </Button>
      ))}
    </HStack>
  );
};

export default HorizontalMenu;
