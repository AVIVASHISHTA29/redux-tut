import React, { useState } from 'react';
import "./App.css";
import ChatRoom from './components/ChatRoom';
import JoinRoom from './components/JoinRoom';

const App = () => {
  const [joined, setJoined] = useState(false);

  return (
    <div>
      <h1>Real-Time Group Chat</h1>
      {!joined ? (
        <JoinRoom onJoin={() => setJoined(true)} />
      ) : (
        <ChatRoom />
      )}
    </div>
  );
};

export default App;
