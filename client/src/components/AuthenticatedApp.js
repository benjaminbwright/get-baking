import React from 'react'

// Authenticated app
const AuthenticatedApp = (props) => (
  <div className="App">
    <header className="App-header">
      <h1>The Get Baking App</h1>
      <p>You're logged in as {props.displayName}!!! Thumbs up!!!</p>
      <button onClick={props.logout}>logout</button>
    </header>
  </div>
)

export default AuthenticatedApp