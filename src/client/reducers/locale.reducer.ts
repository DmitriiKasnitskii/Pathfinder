import localeActions from '../actions/locale.actions';

const initState = { locale: 'EN' };

export default function localeReducer(
  state: any = initState,
  action: {
    type: string,
    payload: { locale: string } }
) {
  switch (action.type) {
    case localeActions.TOGGLE_LOCALE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}
