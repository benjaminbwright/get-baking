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
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name"
        />
        <input 
          type="email"
          name="email"
          placeholder="Email"
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
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
    alert(this.state.email +':'+ this.state.password);
    const {email, password} = this.state;
    this.props.login({ email, password });
  }

  handleRegistrationSubmit = event => {
    event.preventDefault();
    console.log(`You've registered!!!`);
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
              exact path="/register"
              render={props => <RegistrationForm register={this.handleRegistrationSubmit} /> }
            />
          </Router>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp