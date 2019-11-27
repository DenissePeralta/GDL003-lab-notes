import React from "react";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import NotesTimeline from "./Components/NotesTimeline";
import {HashRouter as Router, Route} from "react-router-dom";
import { AuthProvider } from "./Components/AuthState";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/GDL003-lab-notes/">
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/notes" component={NotesTimeline} />
      </Router>
    </AuthProvider>
  );
};

export default App;
