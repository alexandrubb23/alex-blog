import { Box, BoxProps, Button, Heading } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/app/constants';
import { useIsHomePage } from '@/hooks';

interface AboutAuthorProps {
  name: string;
  textAlign?: BoxProps['textAlign'];
}

const AboutAuthor = ({ name, textAlign = 'left' }: AboutAuthorProps) => {
  const router = useRouter();
  const isHomePage = useIsHomePage();

  if (!isHomePage) return null;

  return (
    <Box textAlign={textAlign} padding={0}>
      <Heading as='h2' fontSize='24px'>
        Hello, I&apos;m {name}, I&apos;m a Software Engineer that companies love
        to hire.
      </Heading>
      <Button
        rightIcon={<BsArrowRightShort />}
        colorScheme='teal'
        bg='yellow.500'
        color='black'
        _hover={{ bg: 'yellow.400' }}
        onClick={() => router.push(ROUTES.ABOUT_AUTHOR)}
        mt={8}
      >
        Read more about me
      </Button>
    </Box>
  );
};

export default AboutAuthor;
