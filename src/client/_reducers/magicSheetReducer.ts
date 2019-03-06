import magicSheetConstants from '../_constants/magicSheet.constants';

export default function magicSheetReducer(
  state = { loading: true },
  action: {type: string, payload: any}
) {
  switch (action.type) {
    case magicSheetConstants.REQUEST:
      return {
        ...state,
        loading: true
      };
    case magicSheetConstants.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
