import React from 'react';

const Container = ({ mensaje }) => {
  return (
    <div className="chat-window">
      <div className="message-container">
        {mensaje.map((msg) => (
          <div key={msg.id} className={`message ${msg.author === 'yo' ? 'my-message' : 'other-message'}`}>
            <p><strong>{msg.author}</strong>: {msg.content}</p>
            <span>{msg.fecha} - {msg.estado}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;