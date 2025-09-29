import { useState } from 'react';
import './Email.css';
import { useTranslation } from 'react-i18next';

let db;

function ContactForm() {
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const customSubmit = async (e: { preventDefault: () => void; target; }) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plainObject = Object.fromEntries(formData.entries());

    const transaction = db.transaction(['formSubmissions'], 'readwrite');
    transaction.onerror = (event: Event) => {
      setErrors([...errors, event]);
    };
    const objectStore = transaction.objectStore('formSubmissions');
    objectStore.add(plainObject);
    setSubmitting(true);

    const registration: ServiceWorkerRegistration = await navigator.serviceWorker.ready;
    await registration.sync.register('form-sync');
  };

  const { t } = useTranslation();

  return (
    <section className="mailSection">
      <div className="header">
        {t('emailHeadLine')}
      </div>
      <form onSubmit={customSubmit}>
        <div
          className="mailBody"
        >
          <div>
            <label
              htmlFor="email"
              className="email"
            >
              {t('emailLine')}

              <input
                id="email"
                type="email"
                name="email"
                placeholder="email address"
                className="border-gray-300 border-b-2"
              />
            </label>
            <p>
              {errors}
            </p>
          </div>

          <div className="textField">
            <div className="messageLabel">{t('messageLine')}</div>
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
                      {t('emailSubmit')}
                    </button>
                  )
                  : <p className="pb-8">{t('emailSent')}</p>
                  }
          </div>
        </div>
      </form>
    </section>
  );
}

function Email() {
  return (
    <ContactForm />
  );
}

const request = indexedDB.open('FormDatabase', 1);

request.onsuccess = (event: Event) => {
  db = (event.target as IDBOpenDBRequest).result;
};

request.onupgradeneeded = (event: Event) => {
  db = (event.target as IDBOpenDBRequest).result;
  db.createObjectStore('formSubmissions', { autoIncrement: true });
};

export default Email;
