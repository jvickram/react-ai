import { useState } from 'react';
import './App.css';
import {Chat} from './Components/Chats/Chats'
import {Controls} from './Components/Controls/Controls'

function App() {
  const [message, setMessage] = useState(MESSAGES)

  return (
    <div className="App">
      <header className="Header">
     <img className="Logo" src="/chat-bot.png" alt="logo" />
      <h2 className="Title">AI Chat Bot </h2>
      </header>
    <div className='ChatContainer'>
      <Chat messages={message}/>
    </div>
      <Controls />
    </div>
  );
}

const MESSAGES = [
  {
    'role': "assistant",
    'content':
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    'role': "user",
    'content':
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    'role': "assistant",
    'content':
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    'role': "user",
    'content':
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  }
]

export default App;
