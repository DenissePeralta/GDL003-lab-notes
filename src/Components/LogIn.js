import React, { useCallback, useContext } from "react";
import logo from "../Images/HourTimeLogo.png";
import LogInSocial from "./LogInSocial";
import firebaseConfig from "../firebaseConfig";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./AuthState";
import "../App.css";

const LogIn = ({ history }) => {
  const handleLogIn = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
      history.push("/notes");
    } catch (error) {
      if (email.value.length === 0 || password.value.length === 0 ) {
        alert("⚠️ Please enter a value in both fields");
      } else {
        alert(error);
      }
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/notes" />;
  }

  return (
    <section className="loginContainer">
      <img src={logo} className="loginLogo" alt="logo"/>
      <p>Create notes to keep everything in mind. Please, log in to start or <Link to="/signup">sign up</Link>.</p>
      <form onSubmit={handleLogIn}>
        <input className="emailInput" name="email" type="email" placeholder="👩 User email"/><br></br>
        <input className="passwordInput" name="password" type="password" placeholder="🔒 User password"/><br></br>
        <button className="loginButtons" type="submit"> Log in </button><br></br>
      </form>
      <LogInSocial />
    </section>
  );
};

export default withRouter(LogIn);
