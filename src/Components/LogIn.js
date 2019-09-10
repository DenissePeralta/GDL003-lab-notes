import React, { Component } from 'react';
import logo from '../Images/HourTimeLogo.png';
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import "../App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LogIn extends Component {
  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook} = this.props;

    return (
      <div className="loginContainer">
        <img src={logo} className="loginLogo" alt="logo" />
        {
          user ?
          <p>Hello, {user.displayName}</p>
          : <p>Here you will be able to create notes to keep everything in mind. Please, sign in to start.</p>
        }
        {
          user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
        {
          user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithFacebook}>Sign in with Facebook</button>
        }
      </div>
    );
  }
};

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LogIn);
