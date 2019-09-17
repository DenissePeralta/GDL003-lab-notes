import React from "react";
import logo from "../Images/HourTimeLogo.png";
import logOut from "../Images/logout.png";
import firebaseConfig from "../firebaseConfig";
import "../App.css";

const NavMenu = () => {
  return (
    <div className="navContainer">
    <img src={logo} className="navLogo" alt="logo" />
    <a href=" " className="logoutButton" onClick={ () => firebaseConfig.auth().signOut()}> Log out <img src={logOut} alt="log out"/></a>
      {/*<a href=" " className="logoutButton" onClick={props.signOut.signOut}>{props.user.user.displayName} Log out <img src={logOut} alt="log out"/></a>*/}
    </div>
  );
};

export default NavMenu;
