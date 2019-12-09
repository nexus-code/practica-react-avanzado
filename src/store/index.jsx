import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as userReducers from './user.reducers';
import * as adsReducers from './ads.reducers';

import { setUserLS, getUserLS } from '../utils/localStorage';


const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

const initialData = { user: getUserLS()};

export function configureStore() {
    const reducer = combineReducers(userReducers, adsReducers);
    const middlewares = [thunkMiddleware];
    
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(loggerMiddleware);
    }
    
    const store = createStore(
        reducer,
        initialData,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    store.subscribe(function () {
        setUserLS(store.getState())
    })

    return store;
}
