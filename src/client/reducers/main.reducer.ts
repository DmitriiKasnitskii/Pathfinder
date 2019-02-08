import { combineReducers } from 'redux';
import sheetReducer from './sheet.reducer';
import popupReducer from './popup.reducer';
import localeReducer from './locale.reducer';

const rootReducer = combineReducers({
  sheetReducer,
  localeReducer,
  popupReducer
});

export default rootReducer;
