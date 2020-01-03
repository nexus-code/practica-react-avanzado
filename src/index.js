import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';


import Root from './components/Root';
import { setUserLS } from './utils/localStorage';
import { configureStore } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

// browser history
const history = createBrowserHistory();

const store = configureStore({
    history,    
});


// subscribes to store -> sincronizes localStorage
store.subscribe(() => {
    // User user.user & ads.ads by combineReducers. View to rename
    setUserLS(store.getState().user.user)
});


ReactDOM.render(<Root store={store} />, document.getElementById('root'));