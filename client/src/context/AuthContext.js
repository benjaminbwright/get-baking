import React from 'react'

const AuthContext = React.createContext();

function AuthProvider(props) {

  const loggedIn = false;

  return (
    <AuthContext.Provider value={{loggedIn}} {...props} />
  )

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }