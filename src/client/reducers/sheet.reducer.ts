import sheetActions from '../actions/sheet.actions';

const initState = {a: 1};

export default function sheetReducer(state: any = initState, action: {type: string}) {
    switch (action.type) {
        case sheetActions.INCREASE: {
            return {
                count: state.count + 1,
                ...state
            }
        }
        case sheetActions.DECREASE: {
            return {
                count: state.count + 1,
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
