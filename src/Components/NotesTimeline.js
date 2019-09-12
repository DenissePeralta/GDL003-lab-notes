import React from "react";
import NavMenu from "./NavMenu";
import "../App.css";

const NotesTimeline = (props) => {
  return (
    <div className="notesContainer">
      <NavMenu user={props.user} signOut={props.signOut}/>
    </div>
  );
};


export default NotesTimeline;
