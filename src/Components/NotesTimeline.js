import React from 'react';
import logo from './HourTimeLogo.png';
import '../App.css';

const NotesTimeline = () => {
  return (
    <div className="notesContainer">
      <img src={logo} className="notesLogo" alt="logo" />
      <p>You have signed in</p>
    </div>
  )
};

export default NotesTimeline;
