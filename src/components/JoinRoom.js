// components/JoinRoom.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/actions/chatActions';

const JoinRoom = ({ onJoin }) => {
    const [username, setLocalUsername] = useState('');
    const dispatch = useDispatch();

    const handleJoin = () => {
        if (username.trim()) {
            dispatch(setUsername(username));
            onJoin();
        }
    };

    return (
        <div>
            <h2>Join Chat</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setLocalUsername(e.target.value)}
            />
            <button onClick={handleJoin}>Join</button>
        </div>
    );
};

export default JoinRoom;
