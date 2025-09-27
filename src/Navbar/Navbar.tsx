import './Navbar.css';
import { NavLink, useLocation } from 'react-router';

function Navbar() {
  const location = useLocation();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="navbar">
      <NavLink
        to="/"
        className="navOptions"
        id={location.pathname === '/' ? 'hometext' : ''}
        onClick={() => handleClick()}
      >
        Home
      </NavLink>

      <NavLink
        to="/CV"
        className="navOptions"
        id={location.pathname === '/CV' ? 'hometext' : ''}
        onClick={() => handleClick()}
      >
        CV
      </NavLink>
      <NavLink
        to="/blog"
        className="navOptions"
        id={location.pathname === '/Blog' ? 'hometext' : ''}
        onClick={() => handleClick()}
      >
        Blog
      </NavLink>
    </div>
  );
}

export default Navbar;
