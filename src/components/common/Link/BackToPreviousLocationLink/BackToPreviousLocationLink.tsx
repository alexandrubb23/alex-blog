import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { HTTP_QUERY_KEYS } from '@/app/constants';
import { useIsHomePage } from '@/hooks';
import { useSearchParams } from 'next/navigation';

const BackToPreviousLocationLink = () => {
  const searchParams = useSearchParams();
  const href = searchParams?.get(HTTP_QUERY_KEYS.PAGE_SOURCE);

  const isHomePage = useIsHomePage();

  if (isHomePage) return null;

  return (
    <Box marginY={2}>
      <Link href={`/${href || ''}`}>← Back to {href || 'home'}</Link>
    </Box>
  );
};

export default BackToPreviousLocationLink;
