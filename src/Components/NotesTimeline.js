import React from "react";
import NavMenu from "./NavMenu";
import "../App.css";

const NotesTimeline = () => {
  return (
    <div className="notesContainer">
      <NavMenu />
      {/*<NavMenu user={props.user} signOut={props.signOut}/>*/}
    </div>
  );
};


export default NotesTimeline;
