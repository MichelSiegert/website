import { useTranslation } from 'react-i18next';
import './intro.css';

function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="video-section">
        <video autoPlay muted loop className="section-video" preload="none" poster="assets/placeholder.webp">
          {' '}
          <source src="assets/intro.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-text">
          <h1 className="videoTitle">
            {t('heroSectionTitle')}
          </h1>
          <p className="videoText">
            {t('heroSectionSubtitle')}
          </p>
        </div>

        <div />

      </section>
    </div>
  );
}

export default Introduction;
