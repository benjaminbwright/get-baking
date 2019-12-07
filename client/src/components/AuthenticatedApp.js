import React, { Component } from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import token from '../utils/token'

// import compontents
import HeaderUI from './HeaderUI'
import RecipeRequestCard from './RecipeRequestCard'


// Authenticated app
export default class AuthenticatedApp extends Component {
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
      <div className="App Authenticated">
        <HeaderUI />
        <RecipeRequestCard />
        <RecipeRequestCard />
        <RecipeRequestCard />
        <button onClick={this.props.logout}>logout</button>
      </div>
    )
  }
}