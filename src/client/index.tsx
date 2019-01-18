import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux';
// import {rootReducer} from './reducers';
import App from './App';

// const store = createStore(rootReducer);
// const store = '';

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
