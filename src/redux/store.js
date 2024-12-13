// store.js
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import loggerMiddleware from './middleware/logging';
import rootReducer from './reducers/rootReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
export default store;
