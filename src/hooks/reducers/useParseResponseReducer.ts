import { useCallback, useReducer } from 'react';

import { FetchResponse } from '@/services';
import parseResponseReducer, {
  SET_PARSED_DATA,
} from '@/reducers/parseResponseReducer';

const useParseResponseReducer = (
  parse: (response: FetchResponse) => Promise<FetchResponse>
) => {
  const [parsedResponse, dispatch] = useReducer(parseResponseReducer, null);

  const parseResponseAndDispatch = useCallback(
    (response: FetchResponse) => {
      parse(response)
        .then(parsedData => {
          dispatch({
            type: SET_PARSED_DATA,
            response: parsedData,
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
