import React, { useState } from 'react';
import { io } from 'socket.io-client';
import "./App.css";
import ChatRoom from './components/ChatRoom';
import JoinRoom from './components/JoinRoom';

const socket = io('http://localhost:5001');

// socket.emit(ACTION, PAYLOAD);

const App = () => {
  const [joined, setJoined] = useState(false);

  return (
    <div>
      <h1>Real-Time Group Chat</h1>
      {!joined ? (
        <JoinRoom onJoin={() => setJoined(true)} socket={socket} />
      ) : (
        <ChatRoom socket={socket} />
      )}
    </div>
  );
};

export default App;
