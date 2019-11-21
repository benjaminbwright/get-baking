import React from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'

// TODO: write auth provider
// TODO: Only show authenticated app if provider displayse logged in
// TODO: only show unauthenticated app if login is false

class App extends React.Component {
  
  state = {
    loggedIn: false
  }

  // login click handler
  // delete when real auth is setup
  handleLoginClick = (loggedIn) => {
    this.setState({
      loggedIn: true
    })
  }

  // logout click handler
  // delete when real auth is setup
  handleLogoutClick = (loggedIn) => {
    this.setState({
      loggedIn: false
    })
  }
  
  render() {
    return this.state.loggedIn ? (
      <AuthenticatedApp logout={this.handleLogoutClick} />
    ) : (
      <UnauthenticatedApp login={this.handleLoginClick} />
    );
  }


}

export default App;
