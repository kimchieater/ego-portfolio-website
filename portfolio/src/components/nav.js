import "./nav.css";
import { useNavigate } from 'react-router-dom';

export default function Nav() {

  let navigate = useNavigate();

  return (
    <div className="Nav">
      <div onClick={()=>{
        navigate('/')
      }} className="Nav-logo" to="/">EGO</div>
      <ul className="Nav-nav">
        <li onClick={()=>{
          navigate('/about')
        }}>ABOUT</li>
        <li onClick={()=>{
          navigate('/projects');
        }}>PROJECTS</li>
        <li onClick={()=>{
          navigate('/contacts')
        }}>CONTACT</li>
      </ul>
    </div>
  );
}


