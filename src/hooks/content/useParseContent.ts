import { useCallback, useEffect } from 'react';

import { useParseContentReducer } from '@/hooks/reducers';
import { FetchResponse } from '@/services/api-client';
import parseMarkdownContentToHTML from '@/utils/parseMarkdownContentToHTML';

const useParseContent = (
  response: FetchResponse | undefined,
  parser = parseMarkdownContentToHTML
) => {
  const { parsedData, dispatchParsedData } = useParseContentReducer(parser);

  const processPage = useCallback(async () => {
    if (!response) return;

    await dispatchParsedData(response);
  }, [dispatchParsedData, response]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  return parsedData;
};

export default useParseContent;
