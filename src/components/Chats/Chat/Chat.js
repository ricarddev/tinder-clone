import { Avatar } from '@material-ui/core/';
import React from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';

function Chat({name, message, timestamp, profilePic}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat flex s-bt">
                <Avatar className="chat-image" alt={name} src={profilePic} />
                <div className="chat-details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <div className="chat-timestamp">
                    <p>{timestamp}</p>
                </div>
            </div>
        </Link>
    )
}

export default Chat
