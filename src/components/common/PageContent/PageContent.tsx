import { Box, Heading, VStack } from '@chakra-ui/react';

import '@/styles/prism-dracula.css';
import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import {
  useAddClassToSpecificTags,
  useCodeHighlighting,
  useParseResponse,
  useItemQuery,
} from '@/hooks';
import utilStyles from '@/styles/post.module.css';
import { HTMLObject } from '@/hooks/style/useAddClassToSpecificTags';

const htmlObject: HTMLObject = {
  tags: ['pre', 'code'],
  className: 'language-js',
};

const PageContent = () => {
  const { data, isLoading, error } = useItemQuery();
  const parsedResponse = useParseResponse(data);
  const tagsClass = useAddClassToSpecificTags(htmlObject);

  useCodeHighlighting(parsedResponse?.content || '');

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedResponse) return <CenteredSpinner />;

  const { title, date, content } = parsedResponse;

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
