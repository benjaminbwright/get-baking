import React, { Component } from 'react'
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
    const { firstName, lastName } = this.state.user;

    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          <p>You're logged in as {firstName} {lastName}!!! Thumbs up!!!</p>
          <button onClick={this.props.logout}>logout</button>
        </header>
      </div>
    )
  }
}

export default AuthenticatedApp