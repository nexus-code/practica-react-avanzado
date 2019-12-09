import React from 'react';
import ErrorBoundary    from '../../ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';

import Home      from '../Home';
import Search    from '../Search/Search';
import Register  from '../Register/Register';
import Profile   from '../Register/Profile'; 
import AdEdit    from '../AdEdit/AdEdit';
import AdDetail  from '../AdDetail/AdDetail';
import NotFoundPage from '../404/NotFoundPage';

import { PATH_REGISTER } from '../../constants';


function App({user = undefined}) {
  
  
  const  location = useLocation();
  console.log('this.props to hook', user);
  console.log('location', location);
  console.log('!user && location.pathname', !user && location.pathname !== PATH_REGISTER);

  
  if (!user && location.pathname !== PATH_REGISTER){
      
    return <Redirect to={PATH_REGISTER} />
  }
    
  return <div>
        <ErrorBoundary>
            <Router>
              <Switch>
                <Route path='/register' component={Register } />
                <Route exact path="/profile" component={Profile} user={ user } />
                <Route path='/advert/create' component={ AdEdit } />
                <Route path='/advert/edit/:id' component={ AdEdit } />
                <Route path='/advert/:id' component={ AdDetail } />
                <Route path='/advert/' component={ Search } />
                <Route exact path='/home' component={ Home } />
                <Route exact path='/' component={ Home } />
                <Route path='*' component={ NotFoundPage } />
                <Route component={ Register } />
              </Switch>
            </Router>
        </ErrorBoundary>
    </div>
}

export default App;