import bioSheetConstants from '../_constants/bioSheet.constants';

export default function bioSheetReducer(
  state = { loading: true },
  action: {type: string, payload: any}
) {
  switch (action.type) {
    case bioSheetConstants.REQUEST:
      return {
        ...state,
        loading: true
      };
    case bioSheetConstants.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
