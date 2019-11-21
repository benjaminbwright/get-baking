import React from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import { useAuth } from './context/AuthContext'


// TODO: write auth provider
// TODO: Only show authenticated app if provider displayse logged in
// TODO: only show unauthenticated app if login is false

const App = () => {

  const auth = useAuth();
  console.log(auth.loggedIn);
  return auth.loggedIn ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
}

export default App;
