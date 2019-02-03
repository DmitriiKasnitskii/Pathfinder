import popupActions from '../actions/popup.actions';

const initState = { isVisible: false };

export default function popupReducer(state: any = initState, action: {type: string}) {
  switch (action.type) {
    case popupActions.OPEN: {
      return {
        ...state,
        isVisible: true,
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
