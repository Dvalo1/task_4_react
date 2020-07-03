import React from "react";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";

// Profile page (Placeholder header/avatar and other values, dynamic username and email so far, logout functionality)

function Profile() {
  function logout() {
    const token = Cookies.get('userToken')
    if (token) {
        Cookies.set('userToken', null)
    }
  }
  const profileName = Cookies.get('userName');
  const userEmail = Cookies.get('userEmail');

  return (
    <div className="profile_page">
        <div className="profile_card">
            <div className="prof_img">
                <img className="prof_bg" src="https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt="header_picture" />
                <img className="avatar" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png" alt="prof_picture"/>
                </div>
                <Link to='/login' ><button className="logout" onClick={logout}>Logout</button></Link>
                <div className="profile_main_details">
                    <h1>{profileName}</h1>
                    <p>{userEmail}</p>
                </div> 
            <ul className="user_info">
                <li><button><strong>0</strong><span> Posts</span></button></li>
                <li><button><strong>0</strong><span> Followers</span></button></li>
                <li><button><strong>0</strong><span> Following</span></button></li>
            </ul>
        </div>
    </div>
  );
}

export default Profile;