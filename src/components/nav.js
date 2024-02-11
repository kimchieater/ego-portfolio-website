import "./nav.css";
import { useNavigate } from 'react-router-dom';

export default function Nav({ handleNavClick }) {

  let navigate = useNavigate();

  return (
    <div className="Nav">
      <div onClick={()=>
        handleNavClick('/')
      } className="Nav-logo" to="/">EGO</div>
      <ul className="Nav-nav">
        <li onClick={()=>handleNavClick('/about')}>ABOUT</li>
        <li onClick={()=>handleNavClick('/projects')}>PROJECTS</li>
        <li onClick={()=>handleNavClick('/contacts')}>CONTACT</li>
      </ul>
    </div>
  );
}


