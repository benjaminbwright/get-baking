import React from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import { useAuth } from './context/AuthContext'

const App = () => {
  // get auth from auth context provider
  const auth = useAuth();
  
  return auth.token ? (
    // show authenticate app if there's an auth token
    <AuthenticatedApp auth={auth} logout={auth.logout} />
  ) : (
    // show unauthenticated app otherwise
    <UnauthenticatedApp register={auth.register} login={auth.login} />
  );
}

export default App;
