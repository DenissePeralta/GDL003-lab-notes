import React, { Component } from "react";
import postIcon from "../Images/alfilerIcon.png";
import imageIcon from "../Images/imageIcon.png";
import * as firebase from "firebase";
import "../App.css";

class NotesForm extends Component {
  constructor () {
    super();
    this.state = {
      title: "",
      note: ""
    }
    this.createNote = this.createNote.bind(this);
  }

  onChangeHandler (event, key) {
    this.setState({
      [key]: event.target.value
    })
  }

  createNote () {
    if (this.state.title !== "" && this.state.note !== "" ) {
      firebase.database().ref("Notes").push({
        title: this.state.title,
        note: this.state.note
      })
    } else {
      alert("⚠️ Please enter a value in both fields to create a note");
    }
  }

  render () {
    return (
      <section className="notesFormContainer">
      <input type="text" className="noteFormTitle" id="noteFormTitle" name="noteFormTitle" placeholder="Title..." maxlength="46" value={this.state.title} onChange={(event) =>
      this.onChangeHandler(event, "title")}/>
      <textarea className="noteFormBody" id="noteFormBody" name="noteFormBody" placeholder="Create a new note..." maxlength="150" value={this.state.note} onChange={(event) =>
      this.onChangeHandler(event, "note")}></textarea>
      <div>
      <img onClick={this.createNote} className="notePostIcon" src={postIcon} alt="post icon"/>
      </div>
      <div>
      <img className="imagePostIcon" src={imageIcon} alt="pic icon"/>
      </div>
      </section>
    );
  }
};

export default NotesForm;
