import React from 'react';
import "./ChatMessage.css";
const ChatMessage = ({ message, time}) => {
  return (
    <div className='chat-message'>
       <div className="chat-text">
        <p>{message}</p>
        <span className='chat-date'>{time}</span>
       </div>
        
    </div>
  )
}

export default ChatMessage