import localeConstants from '../_constants/locale.constants';

const initState = { locale: 'EN' };

export default function localeReducer(
  state: any = initState,
  action: {
    type: string
  }
) {
  switch (action.type) {
    case localeConstants.TOGGLE_LOCALE: {
      return {
        ...state,
        locale: state.locale === 'EN' ? 'RU' : 'EN'
      };
    }
    default: {
      return state;
    }
  }
}
