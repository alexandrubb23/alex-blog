import { useCallback, useReducer } from 'react';

import { FetchResponse } from '@/services';
import parseContentReducer, {
  SET_PARSED_DATA,
} from '@/reducers/parseResponseReducer';

const useParseResponseReducer = (
  parse: (response: FetchResponse) => Promise<FetchResponse>
) => {
  const [parsedResponse, dispatch] = useReducer(parseContentReducer, null);

  const parseResponseAndDispatch = useCallback(
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

  return { parsedResponse, parseResponseAndDispatch };
};

export default useParseResponseReducer;
