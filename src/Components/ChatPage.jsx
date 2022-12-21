import React from 'react';
import ChatBox from './ChatBox';
import "./ChatPage.css";
import Sidebar from './Sidebar';

const ChatPage = () => {
  return (
    <div className='chat-page'>
        <div className="chatPage-container">
            <Sidebar />
            <ChatBox />
        </div>
    </div>
  )
}

export default ChatPage