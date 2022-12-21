import React from 'react';
import "./Home.css";
import Sidebar from './Sidebar';
import Whatsapp from "../Images/Whatsapp.png";

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <Sidebar />
        <img src={Whatsapp} alt="myimage" />
      </div>
    </div> 
  )
}

export default HomePage