import React, {Component} from 'react'

const LoginForm = props => {
  return(
    <div id="login-form-container">
      <form id="login-form">
        <input 
          name="userName"
          type="text"
          onChange={props.handleInputChange} 
          value={props.userName}
        />
        <input 
          name="password"
          type="password"
          onChange={props.handleInputChange}
          value={props.password}
        />
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
          <LoginForm userName={this.state.userName} password={this.state.password} handleInputChange={this.handleInputChange} />
          <button onClick={this.state.login} >Login</button>
          <button>Register</button>
        </header>
      </div>
    );
  }
}

export default UnauthenticatedApp