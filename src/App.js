import { useState } from 'react';
import './App.css';
import {Chat} from './components/Chats'

function App() {
  const [message, setMessage] = useState()

  return (
    <div className="App">
      <header className="Header">
     <img className="Logo" src="/chat-bot.png" />
      <h2 className="Title">AI Chat Bot </h2>
      </header>
    <div className='ChatContainer'>
      <Chat />
    </div>
    </div>
  );
}

export default App;
