import React from 'react'

// Unauthenticated app
const UnauthenticatedApp = (props) => (
  <div className="App">
    <header className="App-header">
      <h1>The Get Baking App</h1>
      <button onClick={props.login} >Login</button>
      <button>Register</button>
    </header>
  </div>
);

export default UnauthenticatedApp