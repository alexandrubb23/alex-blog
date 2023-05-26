import { FetchResponse } from '@/services';

export const SET_PARSED_DATA = 'setParsedData';

interface Action {
  type: typeof SET_PARSED_DATA;
  payload: FetchResponse;
}

const parseContentReducer = (state: FetchResponse | null, action: Action) => {
  if (action.type === SET_PARSED_DATA) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
export default parseContentReducer;