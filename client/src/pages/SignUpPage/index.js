import React from 'react'
import Logo from '../../components/Logo'
import RegistrationForm from '../../components/RegistrationForm'

export default function SignUpPage(props) {
  // what we need from props
  const {
    firstName,
    lastName,
    username,
    password,
    register,
    handleInputChange
  } = props;

  return(
    <div id="welcome" className="page">
      <Logo />
      <RegistrationForm firstName={firstName} lastName={lastName} username={username} password={password} register={register} handleInputChange={handleInputChange} />
    </div>
  )
}