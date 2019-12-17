mport React, { useState } from 'react';
import { axiosWithAuth } from '../path/to/module';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
  }

  const handleChange = e => {
      setCredentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      }
  }

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;