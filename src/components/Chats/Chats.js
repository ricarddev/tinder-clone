import React from 'react';
import Chat from './Chat/Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Mark"
                message="Ey whats up!"
                timestamp="40 seconds ago"
                profilePic="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Chat 
                name="Ellen"
                message="Ey dude!"
                timestamp="59 seconds ago"
                profilePic="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
        </div>
    )
}

export default Chats;
