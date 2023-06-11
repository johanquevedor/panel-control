import React, { useState } from 'react';
import contact from '../assets/contact.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
    setFormValues({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">


      {messageSent ? (
        <div className="message-container">
        <p className="success-message">Your message has been sent.</p>
        <button className="ok-button" onClick={() => setMessageSent(false)}>OK</button>
      </div>
      ) : (
        <div className="contact-form">
          <img src={contact} className="loginicon" alt="login" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

 <div className="button-goback">
<Link to="/">
<button className='button-goback'>Go Back</button>
</Link>
</div>     


    </div>
  );
};

export default Contact;
