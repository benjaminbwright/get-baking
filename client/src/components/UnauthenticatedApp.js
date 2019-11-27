import React, {Component} from 'react'

//TODO: add this form to it's own component file
const LoginForm = props => {

  return(
    <div id="login-form-container">
      <form id="login-form">
        <input 
          name="email"
          type="text"
          onChange={props.handleInputChange} 
          value={props.email}
          placeholder="email"
        />
        <input 
          name="password"
          type="password"
          onChange={props.handleInputChange}
          value={props.password}
          placeholder="Password"
        />
        <button onClick={props.login} >Login</button>
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