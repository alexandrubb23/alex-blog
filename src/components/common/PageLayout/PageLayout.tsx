import { useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';
import Prism from 'prismjs';

import '@/styles/prism-dracula.css';
import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import { Layout } from '@/components/Layout';
import { PageObject } from '@/hooks/usePage';
import { useAddClassToSpecificTags, useParseContent } from '@/hooks';
import utilStyles from '@/styles/post.module.css';

interface PageLayoutProps {
  result: UseQueryResult<PageObject, Error>;
}

const PageLayout = ({ result }: PageLayoutProps) => {
  const { data, isLoading, error } = result;

  const parsedContent = useParseContent(data);
  const tagsClass = useAddClassToSpecificTags({
    tags: ['pre', 'code'],
    className: 'language-js',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, [parsedContent]);

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedContent) return <CenteredSpinner />;

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
          dangerouslySetInnerHTML={{
            __html: tagsClass.applyClass(content),
          }}
        />
        <Box marginY={2}>
          <Link href='/'>← Back to home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default PageLayout;
