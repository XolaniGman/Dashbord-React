import React from "react";
import Edit from '../react-icon/bi/icon12.png.webp';

const ProfileHeader = () => {
    return (
    <div className="Profile-header">
        <h2 className="header--title">Profile</h2>
        <div className="edit">
            <img src={Edit} class="icon"/> 
            
        </div>
    </div>
    );
}

export default ProfileHeader;