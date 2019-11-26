import React, {Component} from 'react'


//TODO: add this form to it's own component file
const LoginForm = props => {
  return(
    <div id="login-form-container">
      <form id="login-form">
        <input 
          name="userName"
          type="text"
          onChange={props.handleInputChange} 
          value={props.userName}
          placeholder="User Name"
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
      userName: "",
      password: ""
    }
  }

  handleInputChange = event => {

    const { name, value } = event.target;
  
    this.setState({
      [name]: value
    });
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Get Baking App</h1>
          <LoginForm userName={this.state.userName} password={this.state.password} login={this.props.login} handleInputChange={this.handleInputChange} />
          <button>Register</button>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp