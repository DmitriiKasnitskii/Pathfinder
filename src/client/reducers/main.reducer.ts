import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sheetReducer from './sheet.reducer';
import popupReducer from './popup.reducer';
import localeReducer from './locale.reducer';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  sheetReducer,
  localeReducer,
  popupReducer
});

export default rootReducer;
