import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import bulma from 'bulma';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
          <div className='columns is-centered'>
            <Link className='column  ' to='/login'>Login</Link>
            <Link className='column  ' to='/protected'>Friends</Link>
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