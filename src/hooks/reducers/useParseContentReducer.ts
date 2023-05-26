import { useCallback, useReducer } from 'react';

import { FetchResponse } from '@/services';
import parseContentReducer, {
  SET_PARSED_DATA,
} from '@/reducers/parseContentReducer';

const useParseContentReducer = (
  parse: (response: FetchResponse) => Promise<FetchResponse>
) => {
  const [parsedData, dispatch] = useReducer(parseContentReducer, null);

  const dispatchParsedData = useCallback(
    async (response: FetchResponse) => {
      parse(response)
        .then(parsedData => {
          dispatch({
            type: SET_PARSED_DATA,
            payload: parsedData,
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    [parse]
  );

  return { parsedData, dispatchParsedData };
};

export default useParseContentReducer;
