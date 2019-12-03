import React from 'react';
// import { UserProvider } from '../../context/UserContext';
import ErrorBoundary    from '../../ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home      from '../Home';
import Search    from '../Search/Search';
import Register  from '../Register/Register';
import Profile   from '../Register/Profile'; 
import AdEdit    from '../AdEdit/AdEdit';
import AdDetail  from '../AdDetail/AdDetail';
import NotFoundPage from '../404/NotFoundPage';


export default class App extends React.Component {

  render() {
    
    return (
      <div>
          <ErrorBoundary>
              <Router>
                <Switch>
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/profile" component={ Profile } />
                  <Route path='/advert/create' component={ AdEdit } />
                  <Route path='/advert/edit/:id' component={ AdEdit } />
                  <Route path='/advert/:id' component={ AdDetail } />
                  <Route path='/advert/' component={ Search } />
                  <Route exact path='/home' component={ Home } />
                  <Route exact path='/' component={ Home } />
                  <Route path='*' component={ NotFoundPage } />

                  <Route component={Register} />
                </Switch>
              </Router>
          </ErrorBoundary>
      </div>
    );
  }
}