import homePageConstants from '../_constants/homePage.constants';

export default function homePageReducer(
  state = { loading: true },
  action: {type: string, payload: any}
) {
  switch (action.type) {
    case homePageConstants.LOAD_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case homePageConstants.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
