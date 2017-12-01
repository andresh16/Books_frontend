import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import DevTools from '../components/devTools/component';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';

export const history = createHistory();

const initialState = {};
const enhancers = [DevTools.instrument({maxAge: 10})];
const middleware = [
    ReduxPromise,
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store;