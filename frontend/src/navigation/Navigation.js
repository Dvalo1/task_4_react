import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookies from 'js-cookie';

import StyleChanger from '../components/theme/styleChanger';

// Simple navigation bar, using cookies to check if user is logged in to display appropriate pages on navbar V 
// Profile & Image rating pages when logged in
// Login & Register pages when logged out
// As well as display StyleChanger (Not done yet, ability to switch text colors, theme colors and between dark/light mode)

function Navigation(props) {
  var profilePage = ''
  var loginPage = ''
  var registerPage = ''
  var imageRating = ''
  const token = Cookies.get('userToken')
  if (token !== "null") {
    console.log("Token valid, showing profile and image pages")
    profilePage = <li className={`nav-item  ${props.location.pathname === "/profile" ? "active" : ""}`}>
        <Link className="nav-link" to="/profile">Profile</Link></li>

    imageRating = <li className={`nav-item  ${props.location.pathname === "/rate" ? "active" : ""}`}>
        <Link className="nav-link" to="/rate">Rate Images</Link></li>

  } else {
    console.log("No token found, showing login/register pages & hiding profile/image pages")
    loginPage = <li className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
        <Link className="nav-link" to="/login">Login</Link></li>

    registerPage = <li className={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link className="nav-link" to="/register">Register</Link></li>
  }

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Rate The Image
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              { loginPage }
              { registerPage }
              { imageRating }
              { profilePage }
            </ul>
            <StyleChanger />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);