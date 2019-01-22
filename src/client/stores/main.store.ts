import { configureStore } from 'redux-starter-kit';
import rootReducer from '../reducers/main.reducer';

const store = configureStore({
    reducer: rootReducer
});

export default store
