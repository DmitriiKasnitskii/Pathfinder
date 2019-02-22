import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sheetReducer from './sheet.reducer';
import popupReducer from './popup.reducer';
import localeReducer from './locale.reducer';
import homePageReducer from './homePage.reducer';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  homePageReducer,
  sheetReducer,
  localeReducer,
  popupReducer
});

export default rootReducer;
