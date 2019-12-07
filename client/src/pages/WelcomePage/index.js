import React from 'react'
import { Link }  from 'react-router-dom'
import Logo from '../../components/Logo'

export default function WelcomePage() {
  return(
    <div id="login" className="page">
      <Logo />
      <div className="button-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="button-container">
        <Link to="/signup">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  )
}