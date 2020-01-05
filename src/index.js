import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import { setUserLS } from './utils/localStorage';
import { configureStore } from './store';

// histórico del browser
const history = createBrowserHistory();
console.log('history', history);

const store = configureStore();

// subscribes to store -> sincronizes localStorage
store.subscribe(() => {
    
    // User user.user & ads.ads by combineReducers. View to rename
    setUserLS(store.getState().user.user);

});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));