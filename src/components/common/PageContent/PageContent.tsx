import { Box, Heading, VStack } from '@chakra-ui/react';

import '@/styles/prism-dracula.css';
import { Date } from '@/components/common';
import { PageObject } from '@/hooks/usePage';
import utilStyles from '@/styles/post.module.css';

const PageContent = ({ title, date, content }: Omit<PageObject, 'id'>) => {
  return (
    <VStack spacing={5} alignItems='flex-start'>
      <Heading
        as='h1'
        fontSize='2rem'
        lineHeight='1.3'
        fontWeight='800'
        letterSpacing='-0.05rem'
      >
        {title}
      </Heading>
      <Box textColor='grey'>
        <Date dateString={date} />
      </Box>
      <Box
        className={utilStyles.post}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </VStack>
  );
};

export default PageContent;
