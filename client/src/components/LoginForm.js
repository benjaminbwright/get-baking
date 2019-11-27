import React from 'react'

//TODO: add this form to it's own component file
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
    </div>
  );
}

export default LoginForm