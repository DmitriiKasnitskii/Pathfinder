import popupConstants from '../_constants/popup.constants';

interface IVal {
  initValue: string,
  skillName: string
}

const openPopup = (val: IVal) => (dispatch: (arg0: { type: string; payload: IVal;}) => void) => {
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
