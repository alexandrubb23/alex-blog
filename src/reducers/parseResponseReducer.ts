import { FetchResponse } from '@/services';

export const SET_PARSED_DATA = 'setParsedData';

interface ParseResponse {
  type: typeof SET_PARSED_DATA;
  response: FetchResponse;
}

type ParseResponseAction = ParseResponse;

const parseResponseReducer = (
  state: FetchResponse | null,
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
