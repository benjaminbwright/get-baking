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
        <div className="button-container">
          <button onClick={props.login} >Login</button>
        </div>
      </form>
      <div className="button-container">
        <Link to="/register">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm