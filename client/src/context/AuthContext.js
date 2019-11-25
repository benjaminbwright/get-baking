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


  login = () => {
    let credentials = {
      email: 'flm@fiddle.com',
      password: 'hgotlek'

    }
    axios.post('/api/users/login', credentials)
      .then(res => {
        const authToken = res.data.token
        console.log(authToken)
        // add the authUser & token to local storage
        localStorage.setItem(`getBakingUser`, JSON.stringify(authToken));
        // setup display name
        // TODO: generat the display name in the the user model
  
        this.setState({ 
          authToken
        })
      });
    // this.setState({authUser: {displayName:'Lizzie'}})
  }

  logout = () => {
    localStorage.removeItem(`getBakingUser`);
    this.setState({authUser: undefined});
  }
  
  componentDidMount() {
    this.fetch();
  }

  render() {
    const user = this.state.authUser;
    const token = this.state.authToken;
    console.log(`token: ${token}`)
    const login = this.login;
    const logout = this.logout;
    
    return (
      <AuthContext.Provider value={ { user, token, login, logout } } {...this.props} />
    )
  }
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }