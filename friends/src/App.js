import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
          <div class='navbar is-one-third is-3rem'>
            <Link class='column  is-one-fourth' to='/login'>Login</Link>
            <Link class='column  is-one-fourth' to='/protected'>Friends</Link>
            </div>
        <Switch>
          <PrivateRoute path='/friends' component={FriendList}/>
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
    
  );
}
 export default App;