import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
      authToken: undefined
    }
  }

  fetch = async () => {
    this.setState({ loading: true }); 
    try {
      // const authUser = await {displayName: "Ben"};
      const localStorageUser = JSON.parse(localStorage.getItem('getBakingUser'));
      if (localStorageUser.token) {
        const { firstName, lastName } = localStorageUser.authUser
        const authUser = {
          displayName: `${firstName} ${lastName}`,
          token: localStorageUser.token
        }
        this.setState({ authUser, loading: false });
      } else {
        localStorage.removeItem('getBakingUser');
        this.setState({ authUser: undefined})
      }

      
    } catch (error) { 
      this.setState({ error, loading: false });
    } 
  };

  // authUser = {displayName: "Ben"}

  login = () => {
    let credentials = {
      email: 'flm@fiddle.com',
      password: 'hgotlek'

    }
    axios.post('/api/users/login', credentials)
      .then(res => {
        console.log(res);

        // add the authUser & token to local storage
        localStorage.setItem(`getBakingUser`, JSON.stringify(res.data));
        // setup display name
        // TODO: generat the display name in the the user model
        const { firstName, lastName } = res.data.authUser;
        const displayName = `${firstName} ${lastName}`;
        const authToken = res.data.token
        console.log(authToken)
        this.setState({ 
          authUser: { displayName },
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
    const token = this.state.authtoken;
    const login = this.login;
    const logout = this.logout;
    
    return (
      <AuthContext.Provider value={ { user, token, login, logout } } {...this.props} />
    )
  }
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }