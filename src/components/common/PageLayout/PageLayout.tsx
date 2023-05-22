import { Box } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { CenteredSpinner, ErrorAlert, PageContent } from '@/components/common';
import {
  useAddClassToSpecificTags,
  useCodeHighlighting,
  useParseContent,
} from '@/hooks';
import { PageObject } from '@/hooks/usePage';
import '@/styles/prism-dracula.css';

interface PageLayoutProps {
  result: UseQueryResult<PageObject, Error>;
  className?: string;
  backTo?: {
    href: string;
    text: string;
  };
}

const PageLayout = ({
  backTo = { href: '/', text: 'home' },
  className,
  result,
}: PageLayoutProps) => {
  const { data, isLoading, error } = result;

  const parsedContent = useParseContent(data);
  const tagsClass = useAddClassToSpecificTags({
    tags: ['pre', 'code'],
    className: 'language-js',
  });

  useCodeHighlighting(parsedContent?.content || '');

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedContent) return <CenteredSpinner />;

  const { title, date, content } = parsedContent;

  return (
    <Layout contentClassName={className}>
      <Box marginY={2}>
        <PageContent
          title={title}
          date={date}
          content={tagsClass.applyClass(content)}
        />
        <Link href={backTo.href}>← Back to {backTo.text}</Link>
      </Box>
    </Layout>
  );
};

export default PageLayout;
