import React, { useState } from 'react'
import './Message.css'
import SentSuccess from '../CreateSuccess/SentSuccess'; 

function Message() {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    // Simulate form submission (e.g., sending the message to the server)
    setTimeout(() => {
      console.log("Message sent:", message);
      // Set the form as submitted
      setIsSubmitted(true);
    }, 500); // Simulating a delay for the server response
  };

  return (
    <div>
      {!isSubmitted ? (
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="to">À:</label>
              <input type="text" className="form-control" id="to" value="Admin" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                placeholder='Votre message...'
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn dash btn-primary mt-3">Envoyer</button>
          </form>
        </div>
      ) : (
        <SentSuccess />
      )}
    </div>
  );
}

export default Message
