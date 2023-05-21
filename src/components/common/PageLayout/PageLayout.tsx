import { Box, Heading, VStack } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';
import Prism from 'prismjs';

import { Layout } from '@/components/Layout';
import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import { useParseContent } from '@/hooks';
import { PageObject } from '@/hooks/usePage';
import utilStyles from '@/styles/post.module.css';
import '@/styles/prism-dracula.css';
import { useEffect } from 'react';

interface PageLayoutProps {
  result: UseQueryResult<PageObject, Error>;
}

const PageLayout = ({ result }: PageLayoutProps) => {
  const { data, isLoading, error } = result;

  const parsedContent = useParseContent(data);

  useEffect(() => {
    if (typeof window !== 'undefined') Prism.highlightAll();
  }, [data]);

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  const { title, date, content } = parsedContent;

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
          {title}
        </Heading>
        <Box textColor='grey'>
          <Date dateString={date} />
        </Box>
        <Box
          className={utilStyles.post}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Box marginY={2}>
          <Link href='/'>← Back to home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default PageLayout;
