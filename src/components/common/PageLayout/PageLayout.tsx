import { Box, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { Date } from '@/components/common';
import utilStyles from '@/styles/post.module.css';
import '@/styles/prism-dracula.css';

interface PageLayoutProps {
  data: { id: string; title: string; date: string; content: string };
}

const PageLayout = ({ data }: PageLayoutProps) => {
  return (
    <Layout>
      <VStack spacing={5} alignItems='flex-start'>
        <Heading
          as='h1'
          fontSize='2rem'
          lineHeight='1.3'
          fontWeight='800'
          letterSpacing='-0.05rem'
        >
          {data.title}
        </Heading>
        <Box textColor='grey'>
          <Date dateString={data.date} />
        </Box>
        <Box
          className={utilStyles.post}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <Box marginY={2}>
          <Link href='/'>← Back to home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default PageLayout;
