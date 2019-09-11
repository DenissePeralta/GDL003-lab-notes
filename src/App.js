import React, { Component } from "react";
import LogIn from "./Components/LogIn";
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
