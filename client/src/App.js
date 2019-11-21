import React from 'react';
import './App.css';

// TODO: write auth provider
// TODO: Only show authenticated app if provider displayse logged in
// TODO: only show unauthenticated app if login is false

// Authenticated app
const AuthenticatedApp = () => (
  <div className="App">
    <header className="App-header">
      <h1>The Get Baking App</h1>
    </header>
  </div>
);

// Unauthenticated app
const UnauthenticatedApp = () => (
  <div className="App">
    <header className="App-header">
      <h1>The Get Baking App</h1>
      <p>U ain't logged in!?! Get outta here!!!</p>
    </header>
  </div>
);


function App() {
  
  const loggedIn = true;

  return loggedIn ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
  
}

export default App;
