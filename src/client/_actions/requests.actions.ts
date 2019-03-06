import axios from 'axios';
import homePageConstants from '../_constants/homePage.constants';
import bioSheetConstants from '../_constants/bioSheet.constants';
import magicSheetConstants from '../_constants/magicSheet.constants';
import traitsSheetConstants from '../_constants/traitsSheet.constants';

interface IRequestParam {
  sheetType: string
}

const loadData = (reqParam: IRequestParam) => (dispatch: any) => {
  let constants = homePageConstants;
  let sheetTitle = 'MainSheet';

  switch (reqParam.sheetType) {
    case 'BioSheet': {
      constants = bioSheetConstants;
      sheetTitle = reqParam.sheetType;
      break;
    }
    case 'MagicSheet': {
      constants = magicSheetConstants;
      sheetTitle = reqParam.sheetType;
      break;
    }
    case 'TraitsSheet': {
      constants = traitsSheetConstants;
      sheetTitle = reqParam.sheetType;
      break;
    }
    default: break;
  }

  const request = () => ({
    type: constants.REQUEST,
  });

  const success = (payload: any) => ({
    type: constants.SUCCESS,
    payload,
  });

  const failure = (error: any) => ({
    type: constants.FAILURE,
    error,
  });

  dispatch(request());

  axios.get(`/api/get${sheetTitle}Data`).then(
    data => dispatch(success(data)),
    error => dispatch(failure(error))
  );
};

export default {
  loadData
};
