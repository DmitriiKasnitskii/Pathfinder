import popupConstants from '../_constants/popup.constants';

const initState = { isVisible: false, initValue: '', skillName: '' };

export default function popupReducer(
  state: any = initState,
  action: {
    type: string,
    payload: {
      initValue: string,
      skillName: string
    }
  }
) {
  switch (action.type) {
    case popupConstants.OPEN: {
      return {
        ...state,
        isVisible: true,
        ...action.payload
      };
    }
    case popupConstants.CLOSE: {
      return {
        ...state,
        isVisible: false,
      };
    }
    default: {
      return state;
    }
  }
}
