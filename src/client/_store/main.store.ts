import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_reducers/main.reducer';

export const history = createBrowserHistory();

// @ts-ignore
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState: any) {
  return createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );
}
