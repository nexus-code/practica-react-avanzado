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


export default class App extends React.Component {

  render() {
    
    console.log('this.props', this.props.user);
    

    if (!this.props.user){
      
      return <Redirect to={PATH_REGISTER} />
    }
    
    
  // const { user } = this.props.user;
  // console.log('user', user);
    

    return (
      <div>
          <ErrorBoundary>
              <Router>
                <Switch>
                {!this.props.user && <Route component={Register} />}

                <Route path='/register/' component={Register } />
                  <Route exact path="/profile" component={Profile} user={ this.props.user } />
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
    );
  }
}