import React from 'react';
import './intro.css';

function Introduction() {
  return (
    <div>
      <section className="video-section">
        <video autoPlay muted loop className="section-video" preload="none" poster="assets/placeholder.webp">
          {' '}
          loading="lazy"
          <source src="assets/sintro.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-text">
          <h1 className="videoTitle">Modern Web Development for the Cloud</h1>
          <p className="videoText">
            {' '}
            Empower your digital presence, build scalable solutions – as a fullstack developer, I create cloud-native web applications that are robust, adaptable, and ready for the future.
          </p>
        </div>

        <div />

      </section>
    </div>
  );
}

export default Introduction;
