import sheetConstants from '../_constants/sheet.constants';

const initState = { a: 1, locale: 'ru' };

export default function sheetReducer(state: any = initState, action: {type: string}) {
  switch (action.type) {
    case sheetConstants.INCREASE: {
      return {
        count: state.count + 1,
        ...state
      };
    }
    case sheetConstants.DECREASE: {
      return {
        count: state.count + 1,
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
