// components/ChatRoom.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, setUsers } from '../redux/actions/chatActions';

const ChatRoom = ({ socket }) => {
    const { messages, users, username: myUsername } = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('user_joined', (username) => {
            const message = { username: 'System', text: `${username} has joined the chat! 🎉` };
            dispatch(addMessage(message));
        });
        socket.on('receive_message', (message) => {
            dispatch(addMessage(message));
        });
        socket.on('users_added', (users) => {
            dispatch(setUsers(users));
        });
        socket.on('user_left', (user) => {
            const message = { username: 'System', text: `${user} has left the chat 💔` };
            dispatch(addMessage(message));
        });
    }, [socket, dispatch]);


    const sendMessage = () => {
        const message = { username: myUsername, text: newMessage, timestamp: new Date().toISOString() };
        socket.emit('send_message', message);
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
                            <strong>{msg.username === myUsername ? 'You' : msg.username}: </strong>
                            {msg.text}
                            {msg.timestamp && <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>}
                        </li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => {
                    setNewMessage(e.target.value);
                }}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;
