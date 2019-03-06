import traitsSheetConstants from '../_constants/traitsSheet.constants';

export default function traitsSheetReducer(
  state = { loading: true },
  action: {type: string, payload: any}
) {
  switch (action.type) {
    case traitsSheetConstants.REQUEST:
      return {
        ...state,
        loading: true
      };
    case traitsSheetConstants.FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
