import { Box, Heading, VStack } from '@chakra-ui/react';

import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import {
  useAddClassToSpecificTags,
  useCodeHighlighting,
  useEntityItemQuery,
  useParseResponse,
} from '@/hooks';
import utilStyles from '@/styles/post.module.css';
import '@/styles/prism-dracula.css';
import { usePathname } from 'next/navigation';
import { Entity } from '@/app/api/lib/models';

const PageContent = () => {
  const pathname = usePathname();
  const chunks = pathname.split('/');

  if (chunks.length < 3) {
    throw new Error('Invalid pathname: Insufficient number of chunks');
  }

  const entity: Entity = chunks[1] as Entity;
  const [topic, slug] = chunks.slice(2);

  const { data, isLoading, error } = useEntityItemQuery({
    entity,
    topic,
    slug,
  });

  const parsedResponse = useParseResponse(data);
  const tagsClass = useAddClassToSpecificTags({
    tags: ['pre', 'code'],
    className: 'language-js',
  });

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
