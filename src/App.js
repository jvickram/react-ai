import { useState } from 'react';
import './App.css';
import {Chat} from './Components/Chats/Chats'
import {Controls} from './Components/Controls/Controls'

function App() {
  const [message, setMessage] = useState([])

  function handleContentSend(content){
    setMessage((prevMessages)=>[...prevMessages, {content,role:'user'}])
  }

  return (
    <div className="App">
      <header className="Header">
     <img className="Logo" src="/chat-bot.png" alt="logo" />
      <h2 className="Title">AI Chat Bot </h2>
      </header>
    <div className='ChatContainer'>
      <Chat messages={message}/>
    </div>
      <Controls onSend={handleContentSend}/>
    </div>
  );
}

export default App;
