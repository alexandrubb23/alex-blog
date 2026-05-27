import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { HTTP_QUERY_KEYS, ROUTES } from '@/app/constants';
import { useIsHomePage } from '@/hooks';
import { useSearchParams } from 'next/navigation';

const VALID_SOURCES = Object.values(ROUTES);

const BackToPreviousLocationLink = () => {
  const searchParams = useSearchParams();
  const raw = searchParams?.get(HTTP_QUERY_KEYS.PAGE_SOURCE) ?? "";
  const href = VALID_SOURCES.includes(raw) ? raw : "";

  const isHomePage = useIsHomePage();

  if (isHomePage) return null;

  return (
    <Box marginY={2}>
      <Link href={href || '/'}>{`← Back to ${href || 'home'}`}</Link>
    </Box>
  );
};

export default BackToPreviousLocationLink;
