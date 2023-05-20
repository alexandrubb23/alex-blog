import { Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';

// import styles from '@/styles/menu-list.module.css';

const PagesList = () => {
  return (
    <HStack spacing={4} w='100%' fontSize='12px'>
      <Box>
        <Link href='/' title="Home">Home</Link>
      </Box>
      <Box>
        <Link href='/'>About me</Link>
      </Box>
      <Box>
        <Link href='/'>Projects</Link>
      </Box>
      <Box>
        <Link href='/'>Certifications</Link>
      </Box>
    </HStack>
  );
};

export default PagesList;
