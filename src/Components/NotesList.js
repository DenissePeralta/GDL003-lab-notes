import React, { Component } from "react";
import deleteIcon from "../Images/deleteIcon.png";
import * as firebase from "firebase";
import "../App.css";

class NotesList extends Component {
  constructor (props) {
    super (props);
  }

  deleteNote (id) {
    firebase.database().ref("Notes").child(id).remove();
  }

  render() {
    return (
      <section className="noteListContainer">
        {this.props.notes.map(note => (
          <section className="notePosted" key={note.id}>
            <div className="titlePosted">{note.title}</div>
            <div className="bodyPosted">{note.note}</div>
            <div className="notePostedButtons">
              <img onClick={() => this.deleteNote(note.id)} className="deleteButton" src={deleteIcon} alt="delete icon" key={note.id}/>
            </div>
          </section>
        ))}
      </section>
    )
  }
}

export default NotesList;
