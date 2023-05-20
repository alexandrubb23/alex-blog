import Image from 'next/image';
import { Box } from '@chakra-ui/react';

interface AuthorAvatarProps {
  alt: string;
  fileName: string;
}

const AuthorAvatar = ({ alt, fileName }: AuthorAvatarProps) => {
  return (
    <Image
      alt={alt}
      height={144}
      priority
      src={`/images/${fileName}`}
      width={144}
    />
  );
};

export default AuthorAvatar;
