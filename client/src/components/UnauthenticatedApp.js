import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginForm from './LoginForm'

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
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          <Router>
            <Route 
              path="/"
              render={(props) => <LoginForm email={this.state.email} password={this.state.password} login={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />}
            />
          </Router>
          <button>Register</button>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp