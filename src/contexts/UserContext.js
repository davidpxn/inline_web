import React, { Component } from 'react';

import { logout, login, signup, verifyAuth, getMe } from '../api/api';


export const UserContext = React.createContext({
  authenticated: false,
  user: {},
  loginUser: () => { },
  logoutUser: () => { },
  signupUser: () => { },
  verifyUserAuth: () => { },
  resetUser: () => { },
});


export default class UserProvider extends Component {
  state = {
    authenticated: false,
    user: {},
  };


  loginUser = async (credentials) => {
    const result = await login(credentials);

    if (result.ok) {
      this.setState({ authenticated: true });
    }

    return result;
  };


  signupUser = async (data) => {
    const result = await signup(data);

    if (result.ok) {
      this.setState({ authenticated: true });
    }

    return result;
  };


  logoutUser = async () => {
    const result = await logout();

    if (result.ok) {
      this.setState({ authenticated: false, user: {} });
    }

    return result;
  };


  verifyUserAuth = async () => {
    const result = await verifyAuth();

    if (result.ok) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ authenticated: false });
    }

    return result;
  };


  getUser = async () => {
    const result = await getMe();

    if (result.ok) {
      this.setState({ user: result.data });
    }

    return result;
  };


  render() {
    return (
      <UserContext.Provider value={{
        ...this.state,
        resetUser: () => this.setState({ authenticated: false, user: {} }),
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        signupUser: this.signupUser,
        verifyUserAuth: this.verifyUserAuth,
        getUser: this.getUser,
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
