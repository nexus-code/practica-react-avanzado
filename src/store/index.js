import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { user } from './user/reducers';
import { ads, ui}  from './ads/reducers';

import { setUserLS } from '../utils/localStorage';


const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

// const initialData = {};

export function configureStore(preloadedState) {
    
    const reducer = combineReducers({
        user, 
        ads,
        ui
    });
    
    const middlewares = [thunkMiddleware];
    
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(loggerMiddleware);
    }
    
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    // console.log('configureStore', store.getState());

    store.subscribe(function () {
        // console.log('store.subscribe', store.getState());
        // User user.user by combineReducers. View to rename
        setUserLS(store.getState().user.user)
    });

    return store;
}
