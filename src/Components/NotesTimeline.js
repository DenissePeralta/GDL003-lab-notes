import React from "react";
import logo from "../Images/HourTimeLogo.png";
import "../App.css";

const NotesTimeline = (props) => {
  return (
    <div className="notesContainer">
      <img src={logo} className="notesLogo" alt="logo" />
      <p>Hello, {props.user.displayName}</p>
      <button onClick={props.signOut}>Sign out</button>
    </div>
  );
};


export default NotesTimeline;
