import { useCallback, useEffect } from 'react';

import { useParseResponseReducer } from '@/hooks/reducers';
import parseMarkdownResponseToHTML from '@/utils/parseMarkdownResponseToHTML';
import { PostData } from '@/app/api/lib/models';

const useParseResponse = (
  response: PostData | undefined,
  parser = parseMarkdownResponseToHTML
) => {
  const { parsedResponse, parseResponseAndDispatch } =
    useParseResponseReducer(parser);

  const processPage = useCallback(async () => {
    if (!response) return;

    await parseResponseAndDispatch(response);
  }, [parseResponseAndDispatch, response]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  return parsedResponse;
};

export default useParseResponse;
