import React, { Component } from "react";
import deleteIcon from "../Images/deleteIcon.png";
import editIcon from "../Images/editIcon.png";
import * as firebase from "firebase";
import "../App.css";

class NotesList extends Component {

  deleteNote (id) {
    const confirmDelete = window.confirm("⚠️ Do you want to delete the selected note?")
    if (confirmDelete) {
      firebase.database().ref("Notes").child(id).remove();
    }
    return;
  }
  editNote (id) {
    window.confirm("⚠️ Do you want to edit the selected note?")
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
              <img onClick={() => this.editNote(note.id)} className="editButton" src={editIcon} alt="edit icon" key={note.id}/>
            </div>
          </section>
        ))}
      </section>
    )
  }
}

export default NotesList;
