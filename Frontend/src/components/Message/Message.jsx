import React, { useState } from 'react'
import './Message.css'

function Message() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message sent to Admin:', message);
  };

  return (
    <div >
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
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn dash btn-primary mt-3">Envoyer</button>
          </form>
        </div>
    </div>
  );
}

export default Message