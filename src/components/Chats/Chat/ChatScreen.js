import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name:"Ellen",
            image:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            message: "Ey whats up!"
        },
        {
            name:"Ellen",
            image:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            message: "How's it going?"
        },
        {
            message: "Pretty good! Hows it going?"
        }
    ]);

    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message => (  
                message.name ? (
                    <div className="chat-msg flex">
                        <Avatar className="chat-img" src={message.image} alt={message.name} />
                        <p className="chat-txt">{message.message}</p>
                    </div>
                ) : (
                    <div className="chat-msg flex">
                        <p className="chat-txt-user">{message.message}</p>
                    </div>
                )
            ))}
            <div >
                <form className="msg-sender">
                    <input className="input-msg" type="text" placeholder="Type a message..." />
                    <IconButton>    
                        <button className="form-btn"type="submit">Send</button>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
