import React from "react";
import logo from "../Images/HourTimeLogo.png";
import googleLogo from "../Images/GoogleLogo.png";
import facebookLogo from "../Images/FacebookLogo.png";
import "../App.css";


const LogIn = (props) => {
  return (
    <div className="loginContainer">
      <img src={logo} className="loginLogo" alt="logo" />
      <p>Create notes to keep everything in mind. Please, log in to start.</p>
      <button className="loginButton" onClick={props.signInWithGoogle}><img src={googleLogo} alt="google logo"/> Sign in with Google</button>
      <br></br>
      <button className="loginButton" onClick={props.signInWithFacebook}><img src={facebookLogo} alt="facebook logo"/> Sign in with Facebook</button>
    </div>
  );
};

export default LogIn;
