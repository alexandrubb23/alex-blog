import { PostData } from '@/app/api/lib/models';

export const SET_PARSED_DATA = 'setParsedData';

interface ParseResponse {
  type: typeof SET_PARSED_DATA;
  response: PostData;
}

type ParseResponseAction = ParseResponse;

const parseResponseReducer = (
  state: PostData | null,
  action: ParseResponseAction
) => {
  if (action.type === SET_PARSED_DATA) {
    return {
      ...state,
      ...action.response,
    };
  }

  return state;
};

export default parseResponseReducer;
