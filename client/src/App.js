import React from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'

// TODO: write auth provider
// TODO: Only show authenticated app if provider displayse logged in
// TODO: only show unauthenticated app if login is false

function App() {
  
  const loggedIn = false;

  return loggedIn ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );

}

export default App;
