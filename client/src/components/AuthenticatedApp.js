import React, { Component } from 'react'
// import {BrowserRouter as Router, Rout} from 'react-router-dom'
import axios from 'axios'
import token from '../utils/token'

// Authenticated app
class AuthenticatedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get the token from local storage
      user: JSON.parse(localStorage.getItem(`getBakingUser`)),
      token: token.getToken(`getBakingToken`),
      users: []
    }
  }

  componentDidMount() {
    if (!this.state.token || !this.state.user) {
      this.props.logout();
    } else {
      axios.get(
        '/api/users',
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          if (err) {
            console.log(err)
            this.props.logout()
          }
        });
      }
  }

  loggedInMessage = () => {
    return this.state.user ? (
      <p>You're logged in as { this.state.user.firstName } { this.state.user.lastName } !!! Thumbs up!!!</p>
    ) : (
      <p>You're logged in!!! Thumbs up!!!</p>
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          {this.loggedInMessage()}
          <button onClick={this.props.logout}>logout</button>
        </header>
      </div>
    )
  }
}

export default AuthenticatedApp