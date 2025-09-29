import { useTranslation } from 'react-i18next';
import Counter from '../Counter/counter.tsx';
import './Cards.css';

function Cards() {
  const { t } = useTranslation();

  return (
    <div className="cards">
      <div className="card">
        <Counter duration={800} target={4} decimals={0} />
        <div className="bottomText">{t('workExperienceCard')}</div>

      </div>
      <div className="card">
        <Counter duration={3000} target={99.95} decimals={2} />
        <div className="bottomText">{t('ServerUptime')}</div>
      </div>

      <div className="card">
        <Counter duration={2000} target={8} decimals={0} />
        <div className="bottomText">{t('SuccessfulProjects')}</div>
      </div>
    </div>
  );
}

export default Cards;
