import { NavLink } from 'react-router';
import './impressum.css';

function Impressum() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="impressum" className="pl-10 max-w-full pt-3">
      <div className="justify-items-center grid">
        <div className="text-3xl pb-5">Impressum </div>
        <div className="impressumItems w-full justify-evenly text-lg">
          <div className="impressumColumn">
            <div>Website Owner / Operator:</div>
            <div>Name: Michel Siegert</div>
            <div>Contact Information</div>
          </div>
          <div className="impressumColumn">
            <div>Address:</div>
            <div>Waisenhofstraße 27</div>
            <div>24103 Kiel </div>
            <div> Germany</div>
          </div>

          <div className="impressumColumn">
            <div> Email: Michel@Siegert.online</div>
            <div>Phone: +49 177 87 207 96</div>
          </div>
          <div className="max-w-52 impressumColumn"> Content Responsible in accordance with § 18 (2) MStV: Michel Siegert, Waisenhofstraße 27, 24103 Kiel.</div>
        </div>
      </div>
      <NavLink
        to="/privacy"
        className="text-sm"
        onClick={() => handleClick()}
      >
        Privacy Policy
      </NavLink>
    </div>
  );
}

export default Impressum;
