import { useCallback, useReducer } from 'react';

import parseResponseReducer, {
  SET_PARSED_DATA,
} from '@/reducers/parseResponseReducer';
import { PostData } from '@/app/api/lib/models';

const useParseResponseReducer = (
  parse: (response: PostData) => Promise<PostData>
) => {
  const [parsedResponse, dispatch] = useReducer(parseResponseReducer, null);

  const parseResponseAndDispatch = useCallback(
    (response: PostData) => {
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
