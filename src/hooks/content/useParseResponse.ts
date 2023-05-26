import { useCallback, useEffect } from 'react';

import { useParseResponseReducer } from '@/hooks/reducers';
import { FetchResponse } from '@/services/api-client';
import parseMarkdownResponseToHTML from '@/utils/parseMarkdownResponseToHTML';

const useParseResponse = (
  response: FetchResponse | undefined,
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
