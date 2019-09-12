import React, { Component } from "react";
import LogIn from "./Components/LogIn";
import NotesTimeline from "./Components/NotesTimeline";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;
    return (
         user
          ? <NotesTimeline user={user} signOut={signOut}/>
          : <LogIn signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook}/>
    );
  };
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
