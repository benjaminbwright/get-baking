import React from 'react'

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    }
  }

  fetch = async () => {
    this.setState({ loading: true }); 
    try {
      const authUser = await {displayName: "Ben"};
      this.setState({ authUser, loading: false });
    } catch (error) { 
      this.setState({ error, loading: false });
    } 
  };

  // authUser = {displayName: "Ben"}
  
  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <AuthContext.Provider value={ this.state } {...this.props} />
    )
  }
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }