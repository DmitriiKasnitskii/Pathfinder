import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import popupReducer from './popup.reducer';
import localeReducer from './locale.reducer';
import homePageReducer from './homePage.reducer';
import bioSheetReducer from './bioSheet.reducer';
import traitsSheetReducer from './traitsSheetReducer';
import magicSheetReducer from './magicSheetReducer';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  homePageReducer,
  localeReducer,
  popupReducer,
  bioSheetReducer,
  traitsSheetReducer,
  magicSheetReducer
});

export default rootReducer;
