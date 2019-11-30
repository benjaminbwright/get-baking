import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginForm from './LoginForm'

// Registration form
const RegistrationForm = props => {
  return (
    <div id="registration-form-container">
      <form id="registration-form">
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={props.handleInputChange}
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleInputChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleInputChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handleInputChange}
        />
        <button onClick={props.register}>Register</button>
      </form>
    </div>
  );
}

// Unauthenticated app
class UnauthenticatedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.login({ email, password });
  }

  handleRegistrationSubmit = event => {
    event.preventDefault();
    const {firstName, lastName, email, password} = this.state;
    this.props.register({firstName, lastName, email, password});
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          <Router>
            <Route 
              exact path="/"
              render={props => <LoginForm email={this.state.email} password={this.state.password} login={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />}
            />
            <Route 
              exact fpath="/register"
              render={props => <RegistrationForm firstName={this.state.firstName} lastName={this.state.lastName} username={this.state.username} password={this.state.password} register={this.handleRegistrationSubmit} handleInputChange={this.handleInputChange} /> }
            />
          </Router>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp