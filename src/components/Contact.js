import React, { useRef } from 'react';
import {Email} from './email';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = new Email();
    emailjs.sendForm(email.serviceID, email.templateID, form.current, email.publickey)
      .then((result) => {
          alert("Email sent!");
          console.log(result.text);
      }, (error) => {
          alert("Failed, try again");
          console.log(error.text);
      });
  };

  return (
    <div className="Contact">
        <div className="Form">
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label></label>
                <br></br>
                <input placeholder="Name" type="text" name="user_name"/>
            </div>
            <div className="form-group">
                <label></label>
                <br></br>
                <input placeholder="Email" type="email" name="user_email"/>
            </div>
            <div className="form-group">
                <label htmlFor="message"></label>
                <br></br>
                <textarea className="form-control" name="message" placeholder="Body" rows="5" />
            </div>
            <button type="submit" className="btn btn-primary" value="Send">Submit</button>
            </form>
    </div>
    </div>
  );
};

export default Contact;
