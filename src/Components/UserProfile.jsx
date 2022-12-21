import React from 'react';
import "./UserStyle.css";
import User from "../Images/user.webp"

function UserProfile({ name, profileUrl }) {
  return (
    <div className='user-profile'>
        <div className="user-img">
            <img src={User} alt="" />
        </div>

        <div className="user-info">
            <p className="user-name">
               {name}
            </p>
        </div>
    </div>
  )
}

export default UserProfile