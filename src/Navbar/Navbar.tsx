import { NavLink, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '../languages.ts';
import './Navbar.css';

function Navbar() {
  const { i18n, t } = useTranslation();

  const location = useLocation();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <div id="navbar" className="flex">
      <div className="flex w-full overflow-x-auto items-center-safe">
        <NavLink
          to="/"
          className="navOptions"
          id={location.pathname === '/' ? 'hometext' : ''}
          onClick={() => handleClick()}
        >
          {t('Home')}
        </NavLink>

        <NavLink
          to="/CV"
          className="navOptions"
          id={location.pathname === '/CV' ? 'hometext' : ''}
          onClick={() => handleClick()}
        >
          {t('CV')}
        </NavLink>
        <NavLink
          to="/blog"
          className="navOptions"
          id={location.pathname.substring(0, 5) === '/blog' ? 'hometext' : ''}
          onClick={() => handleClick()}
        >
          {t('Blog')}
        </NavLink>
      </div>
      <select defaultValue={i18n.language} onChange={onChangeLang} className="justify-end">
        {LANGUAGES.map(({ code, label }) => (
          <option style={{ backdropFilter: 'blur(9px)', background: '#80808080', color: '0xffffff' }} key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Navbar;
