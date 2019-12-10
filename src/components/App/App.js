import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import Home      from '../Home';
import Search    from '../Search/Search';
import Register  from '../Register';
import AdEdit    from '../AdEdit/AdEdit';
import AdDetail  from '../AdDetail/AdDetail';
import NotFoundPage from '../404/NotFoundPage';

import { PATH_REGISTER } from '../../constants';


function App({user = undefined}) {
  
  
  const  location = useLocation();
 
  if (!user && location.pathname !== PATH_REGISTER){
      
    return <Redirect to={PATH_REGISTER} />
  }
    
  return <div>
        <ErrorBoundary>
            <Router>
              <Switch>
                <Route path='/register' component={Register } />
                <Route path="/profile" component={() => <Register user={user} />} />
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

App.propTypes = {
  user: PropTypes.object
}

export default App;