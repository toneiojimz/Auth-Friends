import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
    </div>
  );
}
 export default App;