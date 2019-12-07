import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = props => {

  return(
    <div id="login-form-container">
      <form id="login-form">
        <input 
          name="email"
          type="text"
          onChange={props.handleInputChange} 
          value={props.email}
          placeholder="email"
        />
        <input 
          name="password"
          type="password"
          onChange={props.handleInputChange}
          value={props.password}
          placeholder="Password"
        />
        <button onClick={props.login} >Login</button>
      </form>
      <Link to="/register">Create Account</Link>
    </div>
  );
}

export default LoginForm