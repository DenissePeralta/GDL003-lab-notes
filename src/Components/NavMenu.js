import React, { useContext } from "react";
import logo from "../Images/HourTimeLogo.png";
import logOut from "../Images/logout.png";
import firebaseConfig from "../firebaseConfig";
import { AuthContext } from "./AuthState";
import "../App.css";

const NavMenu = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser.displayName === null) {
    return (
      <div className="navContainer">
      <img src={logo} className="navLogo" alt="logo" />
      <a href=" " className="logoutButton" onClick={ () => firebaseConfig.auth().signOut()}> {currentUser.email} Log out <img src={logOut} alt="log out"/></a>
      </div>
    );
  } else {
    return (
      <div className="navContainer">
      <img src={logo} className="navLogo" alt="logo" />
      <a href=" " className="logoutButton" onClick={ () => firebaseConfig.auth().signOut()}> {currentUser.displayName} Log out <img src={logOut} alt="log out"/></a>
      </div>
    );
  }
};

export default NavMenu;
