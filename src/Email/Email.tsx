import React, { useState } from 'react';
import './Email.css';

function ContactForm() {
  const [errors, setErrors]: any = useState([]);
  const [submitting, setSubmitting]:[boolean, any] = useState(false);
  const customSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plainObject = Object.fromEntries(formData.entries());

    if (false/* navigator.onLine */) {
      await fetch('https://formspree.io/f/meoqggyn', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      setSubmitting(true);
    } else {
      const transaction = db.transaction(['formSubmissions'], 'readwrite');
      transaction.oncomplete = (event: any) => {
        console.log('All done!');
      };

      transaction.onerror = (event: any) => {
        setErrors([...errors, event]);
      };
      const objectStore = transaction.objectStore('formSubmissions');
      objectStore.add(plainObject);
      setSubmitting(true);

      const registration: any = await navigator.serviceWorker.ready;
      await registration.sync.register('form-sync');
    }
  };

  return (
    <div className="mailSection">
      <div className="header">Get in Touch: </div>
      <form onSubmit={customSubmit}>
        <div
          className="mailBody"
        >
          <div>
            <label
              htmlFor="email"
              className="email"
            >
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email address"
              className="border-gray-300 border-b-2"
            />
            <p>
              {errors}
            </p>
          </div>

          <div className="textField">
            <div className="messageLabel">Your Message: </div>
            <textarea
              id="message"
              name="message"
              className="border-gray-300 border-2"
              placeholder="your message..."
            />
          </div>
          <div className="submissionbar">
            {
                !submitting
                  ? (
                    <button type="submit" id="submitEmail" disabled={submitting}>
                      Submit
                    </button>
                  )
                  : <p className="pb-8">Message sent!</p>
                  }
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

export let db: any;
const request = indexedDB.open('FormDatabase', 1);

request.onsuccess = (event: any) => {
  console.log(event);
  db = event.target.result;
  db.onerror = (event2: any) => {
    console.error(`Database error: ${event2.target.error?.message}`);
  };
};

request.onupgradeneeded = (event: any) => {
  const db = event.target.result;
  db.createObjectStore('formSubmissions', { autoIncrement: true });
};

export default Email;
