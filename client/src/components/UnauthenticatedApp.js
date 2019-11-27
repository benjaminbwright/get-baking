import React, {Component} from 'react'
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
          <LoginForm email={this.state.email} password={this.state.password} login={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />
          <button>Register</button>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp