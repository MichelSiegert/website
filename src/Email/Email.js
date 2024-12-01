import React from 'react';
import "./Email.css"
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meoqggyn");
  if (state.succeeded) {
      return <p>Message sent!</p>;
  }
  return (
    <div className='mailSection'>
        <div className='header'>Get in Touch: </div>
        <form onSubmit={handleSubmit}>
            <div
            className='mailBody'>
                <div>
                <label htmlFor="email"
                className='email'>
                    Email Address:
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='email address'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                </div>

                <div className='textField'>
                    <div className='messageLabel'>Your Message: </div>
                <textarea
                    id="message"
                    name="message"
                    placeholder='your message...'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    id="message"
                    errors={state.errors}
                />
                </div>
                <div className="submissionbar">
                <button type="submit" id="submitEmail" disabled={state.submitting}>
                    Submit
                </button>
                </div>
            </div>
        </form>
    </div>
  );
}

function Email() {
  return (
    <ContactForm />
  );
}

export default Email;