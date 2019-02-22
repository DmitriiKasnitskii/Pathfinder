import popupConstants from '../_constants/popup.constants';

const openPopup = (val: {initValue: string, skillName: string}) => (dispatch: (arg0: {
  type: string;
  payload: {initValue: string, skillName: string};
}) => void) => {
  dispatch({
    type: popupConstants.OPEN,
    payload: {
      initValue: val.initValue,
      skillName: val.skillName
    }
  });
};

const closePopup = () => (dispatch: (arg0: { type: string }) => void) => {
  dispatch({
    type: popupConstants.CLOSE
  });
};

export default {
  openPopup,
  closePopup
};
