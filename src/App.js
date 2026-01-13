import { useState } from 'react';
import './App.css';
import {Chat} from './components/Chats/Chats'
import {Controls} from './components/Controls/Controls'
import { GoogleGenAI } from "@google/genai";

const api_key = process.env.REACT_APP_API_KEY
const googleai = new GoogleGenAI({ apiKey:api_key});

function App() {
  const [message, setMessages] = useState([])

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      
      const result = await googleai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: content,
      });

      addMessage({ content: result.text(), role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request due to quota reached or technical issues. Please try again!",
        role: "system",
      });
    }

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
