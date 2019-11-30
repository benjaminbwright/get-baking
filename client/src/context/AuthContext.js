import React from 'react'
import axios from 'axios'
import token from '../utils/token'

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: undefined,
      authToken: undefined
    }
  }

  fetch = async () => {
    this.setState({ loading: true }); 
    try {
      // is there a token in local storage already?
      const localStorageToken = token.getToken('getBakingUser');
      // if so...
      if (localStorageToken) {
        // add the token to the authUser
        
        const authToken = {
          authToken: localStorageToken
        }
        this.setState({ authToken, 
          loading: false });
      } else {
        localStorage.removeItem('getBakingUser');
        this.setState({ authUser: undefined, authToken: undefined})
      }

      
    } catch (error) { 
      this.setState({ error, loading: false });
    } 
  };

  register = ({ firstName, lastName, email, password}) => {
    const credentials = {
      firstName,
      lastName,
      email,
      password
    }
    axios.post('/api/users', credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  login = ({ email, password }) => {
    const credentials = {
      // email: 'flm@fiddle.com',
      // password: 'hgotlek'
      email,
      password
    }
    axios.post('/api/users/login', credentials)
      .then(res => {
        const authToken = res.data.token;
        const authUser = res.data.user
        console.log(authToken)
        // add the authUser & token to local storage
        localStorage.setItem(`getBakingUser`, JSON.stringify(res.data.authUser));
        localStorage.setItem(`getBakingToken`, JSON.stringify(authToken));
        // setup display name
        // TODO: generat the display name in the the user model
        this.setState({
          authToken,
          authUser
        })
      });
  }

  logout = () => {
    localStorage.removeItem(`getBakingToken`);
    localStorage.removeItem(`getBakingUser`);
    this.setState({authUser: undefined, authToken: undefined});
  }
  
  componentDidMount() {
    this.fetch();
  }

  render() {
    const token = this.state.authToken;
    const login = this.login;
    const logout = this.logout;
    const register = this.register;
    
    return (
      <AuthContext.Provider value={ { token, register, login, logout } } {...this.props} />
    )
  }
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }