import React from 'react';
import "./Sidebar.css";
import Mybaby from "../Images/Baby-Girl.jpg";
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from './UserProfile';


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-header d-flex justify-content-between">
            <div className="sidebar-header-img">
              <img src={Mybaby} alt="this is a user icon"/>
            </div>
            <div className="sidebar-header-btn">
                <GroupsIcon />
                <TollIcon />
                <InsertCommentIcon />
                <MoreVertIcon />
            </div>
       </div>

       <div className="sidebar-search">
          <div className="sidebar-search-input">
            <SearchIcon />
            <input type="text" name="search" id="" placeholder='search or start a new chat' />
          </div>
       </div>

       <div className="sidebar-chat-list">
          <UserProfile name="Richy" profileUrl="../Images/Richy.jpg" />
          <UserProfile name="Getty" profileUrl="../Images/Getty.jpg" />
          <UserProfile name="Blessing" profileUrl="../Images/Blessing.jpg" />
          <UserProfile name="My Twins" profileUrl="../Images/My-Twin.jpg" />
          <UserProfile name="Dicta" profileUrl="../Images/Dicta.jpg" />
          <UserProfile name="Ella" profileUrl="../Images/Ella.jpg" />
          <UserProfile name="Freeman" profileUrl="../Images/Freeman.jpg" />
          <UserProfile name="Mabel" profileUrl="../Images/Mabel.jpg" />
          <UserProfile name="Baroski" profileUrl="../Images/Baroski.jpg" />
          <UserProfile name="Baby Girl" profileUrl="../Images/Baby-Girl.jpg" />
          <UserProfile name="Avogadro" profileUrl="../Images/user.webp" />
          <UserProfile name="Daniel Agyarko" profileUrl="" />
       </div>
    </div>
  )
}

export default Sidebar;