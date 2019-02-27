import axios from 'axios';
import homePageConstants from '../_constants/homePage.constants';

const loadData = () => (dispatch: any) => {
  const request = () => ({
    type: homePageConstants.LOAD_DATA_REQUEST,
  });

  const success = (payload: any) => ({
    type: homePageConstants.LOAD_DATA_SUCCESS,
    payload,
  });

  const failure = (error: any) => ({
    type: homePageConstants.LOAD_DATA_FAILURE,
    error,
  });

  dispatch(request());

  axios.get('/api/getMainSheetData').then(
    data => dispatch(success(data)),
    error => dispatch(failure(error))
  );
};

export default {
  loadData
};
