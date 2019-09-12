import React from "react";
import logo from "../Images/HourTimeLogo.png";
import logOut from "../Images/logout.png";
import "../App.css";

const NavMenu = (props) => {
  return (
    <div className="navContainer">
      <img src={logo} className="navLogo" alt="logo" />
      <a href=" " className="logoutButton" onClick={props.signOut}>{props.user.displayName} Log out <img src={logOut} alt="log out"/></a>
    </div>
  );
};

export default NavMenu;

// const NavMenu = (props) => {
//   return (
//     <div className="navContainer">
//       <img src={logo} className="navLogo" alt="logo" />
//       <Link to="/">
//         <a href=" " className="logoutButton" onClick={props.signOut}>{props.user.displayName} Log out <img src={logOut} alt="log out"/></a>
//       </Link>
//     </div>
//   );
// };



//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// class App extends Component {
//   render() {
//     const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;
//     return (
//       <Router>
//         <Switch>
//         // <NotesTimeline user={user} signOut={signOut} /> <LogIn signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook}/>
//           user
//           ? <Route path="/notes" exact component={NotesTimeline} />
//           : <Route path="/" exact component={LogIn} />
//         </Switch>
//       </Router>
//     );
//   };
// };


//import {Link} from "react-router-dom";
// const LogIn = (props) => {
//   return (
//     <div className="loginContainer">
//       <img src={logo} className="loginLogo" alt="logo" />
//       <p>Create notes to keep everything in mind. Please, log in to start.</p>
//       <Link to="/notes">
//         <button className="loginButton" onClick={props.signInWithGoogle}><img src={googleLogo} alt="google logo"/> Sign in with Google</button>
//       </Link>
//       <br></br>
//       <Link to="/notes">
//         <button className="loginButton" onClick={props.signInWithFacebook}><img src={facebookLogo} alt="facebook logo"/> Sign in with Facebook</button>
//       </Link>
//     </div>
//   );
// };
