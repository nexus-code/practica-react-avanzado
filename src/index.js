import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import { getUserLS, setUserLS } from './utils/localStorage';
import { configureStore } from './store';

const renderApp = props =>
    ReactDOM.render(<Root {...props} />, document.getElementById('root'));

// histórico del browser
const history = createBrowserHistory();

const user = {
    user: getUserLS(),
    };

const store = configureStore({ history })({ user });

// subscribes to store -> sincronizes localStorage
store.subscribe(() => {

    const { user } = store.getState();
    
    // User user.user & ads.ads by combineReducers. View to rename
    setUserLS(user.user);


    // renderApp({ store, history });
});

renderApp({ store, history });  // Review

// ReactDOM.render(<Root store={store} />, document.getElementById('root'));