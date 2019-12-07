import React from 'react'
import Logo from '../../components/Logo'
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
      <Logo />
      <LoginForm email={email} password={password} login={login} handleInputChange={handleInputChange} />
    </div>
  )
}