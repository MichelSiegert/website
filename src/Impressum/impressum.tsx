import { NavLink } from 'react-router';
import './impressum.css';
import { useTranslation } from 'react-i18next';

function Impressum() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();

  return (
    <div id="impressum" className="pl-10 max-w-full pt-3">
      <div className="justify-items-center grid">
        <div className="text-3xl pb-5">
          {t('imprint.title')}
        </div>

        <div className="impressumItems w-full justify-evenly text-lg">
          <div className="impressumColumn">
            <div>{t('imprint.ownerTitle')}</div>
            <div>{t('imprint.name')}</div>
            <div>{t('imprint.contact')}</div>
          </div>

          <div className="impressumColumn">
            <div>{t('imprint.addressTitle')}</div>
            <div>{t('imprint.street')}</div>
            <div>{t('imprint.city')}</div>
            <div>{t('imprint.country')}</div>
          </div>

          <div className="impressumColumn">
            <div>{t('imprint.email')}</div>
            <div>{t('imprint.phone')}</div>
          </div>

          <div className="max-w-52 impressumColumn">
            {t('imprint.responsible')}
          </div>
        </div>
      </div>

      <NavLink
        to="/privacy"
        className="text-sm"
        onClick={handleClick}
      >
        {t('imprint.privacy')}
      </NavLink>
    </div>
  );
}

export default Impressum;
