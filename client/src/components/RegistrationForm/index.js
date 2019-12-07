import React from 'react'
import './index.css'

// Registration form
// TODO: put this form in it's own file
export default function RegistrationForm(props) {
  return (
    <div id="registration-form-container">
      <form id="registration-form">
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={props.handleInputChange}
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleInputChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleInputChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handleInputChange}
        />
        <div className="button-container">
          <button onClick={props.register}>Register</button>
        </div>
      </form>
    </div>
  );
}