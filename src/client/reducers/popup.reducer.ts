import popupActions from '../actions/popup.actions';

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
    case popupActions.OPEN: {
      return {
        ...state,
        isVisible: true,
        ...action.payload
      };
    }
    case popupActions.CLOSE: {
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
