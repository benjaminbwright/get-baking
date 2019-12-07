import React from 'react'
import LoginForm from '../../components/LoginForm'

export default function WelcomePage(props) {
  // what we need from props
  const {
    email,
    password,
    login,
    handleInputChange
  } = props;

  return(
    <div id="welcome" className="page">
      This is the welcome page.
      <LoginForm email={email} password={password} login={login} handleInputChange={handleInputChange} />
    </div>
  )
}