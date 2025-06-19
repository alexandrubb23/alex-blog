import { useCallback, useEffect } from 'react';

import type { PostDataOrUndefined } from '@/app/api/lib/models/post-data.interface';
import { useParseResponseReducer } from '@/hooks/reducers';
import parseMarkdownResponseToHTML from '@/utils/parseMarkdownResponseToHTML';

const useParseResponse = (
  response: PostDataOrUndefined,
  parser = parseMarkdownResponseToHTML
) => {
  const { parsedResponse, parseResponseAndDispatch } =
    useParseResponseReducer(parser);

  const processPage = useCallback(() => {
    if (!response) return;

    parseResponseAndDispatch(response);
  }, [parseResponseAndDispatch, response]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  return parsedResponse;
};

export default useParseResponse;
