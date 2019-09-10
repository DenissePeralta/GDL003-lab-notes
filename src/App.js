import React, { Component } from "react";
import LogIn from "./Components/LogIn";
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

class App extends Component {
  render(){
    return (
      <div className="principalContainer">
          <LogIn/>
      </div>
    );
  };
};

export default App;
