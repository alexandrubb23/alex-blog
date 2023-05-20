import { Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { MenuProps } from '@/components/common/Menus/models';

const HorizontalMenu = ({ data }: MenuProps) => {
  return (
    <HStack spacing={4} w='100%' fontSize='12px'>
      {data.map(item => (
        <Box key={item.id}>
          <Link href={item.id} title={item.title}>
            {item.title}
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default HorizontalMenu;
