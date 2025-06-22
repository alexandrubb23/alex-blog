import { notFound } from 'next/navigation';
import { Box, Heading, VStack } from '@chakra-ui/react';

import { CenteredSpinner, ErrorAlert } from '@/components/common';
import {
  useAddClassToSpecificTags,
  useCodeHighlighting,
  useItemQuery,
  useParseResponse,
} from '@/hooks';
import { HTMLObject } from '@/hooks/style/useAddClassToSpecificTags';
import utilStyles from '@/styles/post.module.css';
import '@/styles/prism-dracula.css';
import { formatReadingTime } from '@/utils/formatReadingTime';
import { PostMeta } from '../PostMeta';

const htmlObject: HTMLObject = {
  tags: ['pre', 'code'],
  className: 'language-js',
};

const PageContent = () => {
  useCodeHighlighting();

  const { data, isLoading, error } = useItemQuery();
  const parsedResponse = useParseResponse(data);

  const tagsClass = useAddClassToSpecificTags(htmlObject);

  if (error) return <ErrorAlert error={error.message} />;

  if (!data) notFound();

  if (isLoading || !parsedResponse) return <CenteredSpinner />;

  const { id, title, date, content } = parsedResponse;
  const readingTime = formatReadingTime(content, id);

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
      <PostMeta readingTime={readingTime} date={date} />
      <Box
        className={utilStyles.post}
        dangerouslySetInnerHTML={{
          __html: tagsClass.applyClass(content),
        }}
      />
    </VStack>
  );
};

export default PageContent;
