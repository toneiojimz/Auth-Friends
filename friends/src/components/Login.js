import React, {useState} from 'react';

import axiosWithAuth  from '../utils/axiosAuth';


const Login = (props) => {

    const [credential, setCredential]= useState({ username: 'Lambda School', password: 'i<3Lambd4'});
    const [logged, setLogged]= useState(false);


  const handleChange = e => {

        setCredential({
            ...credential, 
            [e.target.name]: e.target.value
        });
  };

  const login = e => {
      e.preventDefault();
      

      axiosWithAuth()
        .post('/login', credential)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            setLogged(false);
            props.history.push('/friends');
        })
        .catch(err => console.log(err));
  };
    
    
    return (
      <div className='field '>
          {logged && <p>Fetching Friends</p>}
        <form className='column is-half is-centered'   onSubmit={login}>
          <input className='input is-focused is-one-fourth is-centered '
            type="text"
            name="username"
            placeholder= "username"
            value={credential.username}
            onChange={handleChange}
          />
          <input className='input is-focused is-one-fourth is-centered '
            type="password"
            name="password"
            placeholder="password"
            value={credential.password}
            onChange={handleChange}
          />
          <button className='button is-success is-one-fourth'>Log in</button>
        </form>
      </div>
    )
    
}

export default Login;