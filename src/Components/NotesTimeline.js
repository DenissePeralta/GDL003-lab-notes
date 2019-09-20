import React, { Component } from "react";
import * as firebase from "firebase";
import NavMenu from "./NavMenu";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import "../App.css";

class NotesTimeline extends Component {
  constructor () {
    super();
    this.state = {
      notes: []
    }
  }
  componentDidMount () {
    this.db = firebase.database();
    this.listenForChange();
  }
  listenForChange () {
    this.db.ref("Notes").on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note,
        user: snapshot.val().user
      }
      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    this.db.ref("Notes").on("child_removed", snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);

      this.setState({
        notes: notes
      });
    });

  }
  render () {
    return (
      <section className="notesContainer">
        <NavMenu />
        <NotesForm />
        <NotesList notes={this.state.notes}/>
      </section>
    );
  }
};

export default NotesTimeline;
