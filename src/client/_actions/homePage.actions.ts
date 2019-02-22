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

  fetch('/api/Data/getData', {
    method: 'Get',
    credentials: 'include', // mode: 'no-cors',
  }).then(response => response.json())
    .then(data => dispatch(success(data)), error => dispatch(failure(error)));
};

export default {
  loadData
};
