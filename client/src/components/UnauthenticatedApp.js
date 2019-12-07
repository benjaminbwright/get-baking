import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import WelcomePage from '../pages/WelcomePage';

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
      <div className="App Unauthenticated">
          <Router>
            <Route 
              exact path="/"
              render={props => <WelcomePage email={this.state.email} password={this.state.password} login={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />}
            />
            <Route 
              exact path="/register"
              render={props => <RegistrationForm firstName={this.state.firstName} lastName={this.state.lastName} username={this.state.username} password={this.state.password} register={this.handleRegistrationSubmit} handleInputChange={this.handleInputChange} /> }
            />
          </Router>
      </div>
    );
  }
}

export default UnauthenticatedApp