import React from "react";
import googleLogo from "../Images/GoogleLogo.png";
import facebookLogo from "../Images/FacebookLogo.png";
import firebaseConfig from "../firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import "../App.css";

const LoginButton = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.buttonFunction}><img src={props.imageSource} alt={props.imageAlt}/>{props.buttonLabel}</button><br></br>
    </div>
  );
}

const LogInSocial = (props) => {
    return (
      <div>
      <LoginButton className="loginButtons" buttonFunction={props.signInWithGoogle} imageSource={googleLogo} imageAlt="google logo" buttonLabel=" Sign in with Google"/>
      <LoginButton className="loginButtons" buttonFunction={props.signInWithFacebook} imageSource={facebookLogo} imageAlt="facebook logo" buttonLabel=" Sign in with Facebook"/>
      </div>
    );
};

const firebaseAppAuth = firebaseConfig.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LogInSocial);
