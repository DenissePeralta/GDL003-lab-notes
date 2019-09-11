import React, { Component } from "react";
import logo from "../Images/HourTimeLogo.png";
import googleLogo from "../Images/GoogleLogo.png";
import facebookLogo from "../Images/FacebookLogo.png";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import "../App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

class LogIn extends Component {
  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;
    return (
      <div className="loginContainer">
        <img src={logo} className="loginLogo" alt="logo" />
        { user
          ? <NotesTimelineItems user={user} signOut={signOut}/>
          : <LogInItems signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook}/>
        }
      </div>
    );
  }
};

const LogInItems = (props) => {
  return (
    <div>
      <p>Create notes to keep everything in mind. Please, log in to start.</p>
      <button className="loginButton" onClick={props.signInWithGoogle}><img src={googleLogo} alt="google logo"/> Sign in with Google</button>
      <br></br>
      <button className="loginButton" onClick={props.signInWithFacebook}><img src={facebookLogo} alt="facebook logo"/> Sign in with Facebook</button>
    </div>
  );
};

const NotesTimelineItems = (props) => {
  return (
    <div>
      <p>Hello, {props.user.displayName}</p>
      <button onClick={props.signOut}>Sign out</button>
    </div>
  );
};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LogIn);
