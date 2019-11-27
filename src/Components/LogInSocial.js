import React from "react";
import googleLogo from "../Images/GoogleLogo.png";
import facebookLogo from "../Images/FacebookLogo.png";
import firebaseConfig from "../firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import {auth} from "firebase/app";
import "../App.css";

const LoginButton = (props) => {
  return (
    <section>
      <button className={props.className} onClick={props.buttonFunction}><img src={props.imageSource} alt={props.imageAlt}/>{props.buttonLabel}</button><br></br>
    </section>
  );
}

const LogInSocial = (props) => {
    return (
      <section>
      <LoginButton className="loginButtons" buttonFunction={props.signInWithGoogle} imageSource={googleLogo} imageAlt="google logo" buttonLabel=" Sign in with Google"/>
      <LoginButton className="loginButtons" buttonFunction={props.signInWithFacebook} imageSource={facebookLogo} imageAlt="facebook logo" buttonLabel=" Sign in with Facebook"/>
      </section>
    );
};

const firebaseAppAuth = firebaseConfig.auth();
const providers = {
  googleProvider: new auth.GoogleAuthProvider(),
  facebookProvider: new auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LogInSocial);
