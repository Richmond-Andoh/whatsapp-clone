import React from 'react'
import "./ChatBox.css";
import User from '../Images/user.webp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatMessage from './ChatMessage';
import InsertEmoticonIcon  from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
//import MicNoneIcon from '@mui/icons-material/MicNone';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';
import { useState } from 'react';

const ChatBox = () => {

    const [message, addMessage ] = useState('');
    const [emoji, openEmoji ] = useState(false);

  return (
    <div className='chat-box'>
        <div className="chat-box-header">
            <div className="chat-info">
                <div className="chat-profile">
                    <img src={User} alt="" />
                </div>
                <p>Gertrude Ohene</p>
            </div>
            <div className="chat-box-btn">
                <SearchIcon />
                <MoreVertIcon />
            </div>
        </div>

        <div className="chat-display-box">
           <ChatMessage message="Hi! howdy?" time="12-12-2022"/>
           <ChatMessage message="I'm still alive" time="12-12-2022"/>
           <ChatMessage message="Sounds great" time="12-12-2022"/>
        </div>

        <div className="input-chat">
         
            <span className="emoji">
               { emoji && <Picker /> }
            </span>
            
            <div className="input-chat-btns">
                <InsertEmoticonIcon onClick={ () => openEmoji(!emoji)}/>
                <AttachFileIcon />
            </div>
            <form action="">
                <input type="text" placeholder='Typea message' value={message}
                  onChange={ (e) => {
                    addMessage(console.log(e.target.value))
                  }
                }
                />
            </form>
            
            <div className="input-chat-send-btn">
                <SendIcon />
            </div>
        </div>
    </div>
  )
}

export default ChatBox