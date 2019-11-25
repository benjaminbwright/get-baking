import React, { Component } from 'react'
import axios from 'axios'
import token from '../utils/token'

// Authenticated app
class AuthenticatedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get the token from local storage
      token: token.getToken(`getBakingUser`),
      users: []
    }
  }

  componentDidMount() {
    if (!this.state.token) {
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
          console.log(res.data.decoded);
        })
        .catch(err => {
          if (err) {
            console.log(err)
            this.props.logout()
          }
        });
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          <p>You're logged in as {this.props.displayName}!!! Thumbs up!!!</p>
          <button onClick={this.props.logout}>logout</button>
        </header>
      </div>
    )
  }
}

export default AuthenticatedApp