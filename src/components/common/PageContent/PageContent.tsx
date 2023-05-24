import { Box, Heading, VStack } from '@chakra-ui/react';

import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import {
  useAddClassToSpecificTags,
  useCodeHighlighting,
  useParseContent,
  useQueryHookProvider,
} from '@/hooks';
import { QueryParams } from '@/hooks/useEntitySlug';
import utilStyles from '@/styles/post.module.css';
import '@/styles/prism-dracula.css';

interface PostProps {
  params: QueryParams;
}

const PageContent = () => {
  const { queryHook, params } = useQueryHookProvider();
  const { data, isLoading, error } = queryHook({ ...params });

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
    </VStack>
  );
};

export default PageContent;
