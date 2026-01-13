import './Chats.css'

const WELCOME_MESSAGES = 
  {
    'role': "assistant",
    'content':
      "Hello! how can i assist you right now?"
  }

export function Chat({ messages }) {
  return (
    <div className='Chat'>
      { [WELCOME_MESSAGES,...messages].map(({ role, content }, index) => (
        <div key={index} data-role={role} className="Message">{content}</div>
      ))}
    </div>
  );
}
