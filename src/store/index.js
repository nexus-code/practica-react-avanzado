import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as userReducers from './user/reducers';
import * as adsReducers from './ads/reducers';

import { setUserLS } from '../utils/localStorage';


const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

// const initialData = {};

export function configureStore(preloadedState) {
    
    
    // const reducer = combineReducers(userReducers); // OK
    // const reducer = combineReducers({userReducers}); // ERROR

    const reducer = combineReducers({
        userReducers, 
        adsReducers,
    }); // ERROR


    const middlewares = [thunkMiddleware];
    
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(loggerMiddleware);
    }
    
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    store.subscribe(function () {
        console.log('store.subscribe', store.getState());
        // why user.user? becose combineReducers???
        setUserLS(store.getState().user.user)
        // setUserLS(store.getState().user)
    });

    return store;
}
