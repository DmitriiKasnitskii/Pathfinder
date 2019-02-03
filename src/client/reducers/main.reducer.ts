import { combineReducers } from 'redux';
import sheetReducer from './sheet.reducer';
import popupReducer from './popup.reducer';

const rootReducer = combineReducers({
  sheetReducer,
  popupReducer
});

export default rootReducer;
