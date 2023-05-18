'use client';

import Image from 'next/image';
import { Box } from '@chakra-ui/react';

interface AuthorAvatarProps {
  alt: string;
  fileName: string;
}

const AuthorAvatar = ({ alt, fileName }: AuthorAvatarProps) => {
  return (
    <Box alignItems='center' justifyContent='center' display='flex'>
      <Image
        alt={alt}
        height={144}
        priority
        src={`/images/${fileName}`}
        width={144}
      />
    </Box>
  );
};

export default AuthorAvatar;
