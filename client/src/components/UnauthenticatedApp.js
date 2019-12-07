import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import LoginForm from './LoginForm'
import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage'

// Unauthenticated app
export default class UnauthenticatedApp extends Component {
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
      <div className="App Unauthenticated">
          <Router>
            <Route 
              exact path="/"
              render={() => <WelcomePage />}
            />
            <Route 
              exact path="/login"
              render={props => <LoginPage email={this.state.email} password={this.state.password} login={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />}
            />
            <Route 
              exact path="/signup"
              render={props => <SignUpPage firstName={this.state.firstName} lastName={this.state.lastName} username={this.state.username} password={this.state.password} register={this.handleRegistrationSubmit} handleInputChange={this.handleInputChange} /> }
            />
          </Router>
      </div>
    );
  }
}