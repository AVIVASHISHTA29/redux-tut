// components/ChatRoom.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/actions/chatActions';

const ChatRoom = () => {
    const { messages, users, username } = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        const message = { username, text: newMessage };
        dispatch(addMessage(message));
        setNewMessage('');
    };

    return (
        <div>
            <h2>Group Chat</h2>
            <div>
                <h3>Online Users</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Messages</h3>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>
                            <strong>{msg.username}: </strong>
                            {msg.text}
                        </li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;
