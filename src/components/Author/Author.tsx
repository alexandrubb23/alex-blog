'use client';

import { Container, VStack } from '@chakra-ui/react';
import { AuthorAvatar } from './AuthorAvatar';
import { AuthorName } from './AuthorName';
import { AboutAuthor } from './AboutAuthor';

interface AuthorProps {
  name: string;
}

const aboutAuthor = `and I'm excited to be here. 
  I'm a seasoned Software Engineer with years of experience in the field. 
  I hail from Romania, specifically Bucharest, 
  where I was born and currently reside with my loving wife and two adorable kids.`;

const Author = ({ name }: AuthorProps) => {
  return (
    <VStack spacing={5}>
      <AuthorAvatar alt={name} fileName='alex.png' />
      <AuthorName name={name} />
      <AboutAuthor description={aboutAuthor} name={name} />
    </VStack>
  );
};

export default Author;
