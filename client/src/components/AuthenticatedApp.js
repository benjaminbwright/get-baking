import React, { Component } from 'react'
import axios from 'axios'
import token from '../utils/token'

// Authenticated app
class AuthenticatedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO: put this in some kind of method I can import
      token: token.getToken(`getBakingUser`),
      // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6Ik1vcmsiLCJsYXN0TmFtZSI6ImRlIE1vaXMifSwiaWF0IjoxNTc0NDgwMTUzLCJleHAiOjE1NzQ0ODAyMTN9.2lDLzfT4C4foqRDtiswgmLiu31ufxgvgCda2i2W3Pn8',
      users: []
    }
  }

  componentDidMount() {
    console.log(this.state.token)
    axios.get(
      '/api/users',
      {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }
      )
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        if (err) {
          if (err.response.status === 403) {
            this.props.logout()
          }
        }
      });
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