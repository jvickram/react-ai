import './Chat.css'
export function Chat({ messages }) {
  return (
    <div className='Chat'>
      { messages.map(({ role, content }, index) => (
        <div key={index} data-role={role} className="Message">{content}</div>
      ))}
    </div>
  );
}
