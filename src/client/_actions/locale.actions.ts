import localeConstants from '../_constants/locale.constants';

const changeLocale = () => (dispatch: any) => {
  dispatch({
    type: localeConstants.TOGGLE_LOCALE
  });
};

export default {
  changeLocale
};
