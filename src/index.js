import React from 'react';
import ReactDOM from 'react-dom';


import Root from './components/Root';
import { setUserLS } from './utils/localStorage';
import { configureStore } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

// subscribes to store -> sincronizes localStorage
store.subscribe(() => {
    
    // User user.user & ads.ads by combineReducers. View to rename
    setUserLS(store.getState().user.user);

});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));