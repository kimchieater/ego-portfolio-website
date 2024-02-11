import "./App.css";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Header from "./components/header.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contacts from "./components/contact.js";
import Loading from "./components/loading.js"
import Nav from './components/nav.js'
import {useState, useEffect} from 'react';
import {AnimatePresence} from "framer-motion";
import TransitionCover from "./components/transitionCover.js";




function App() {
  const navigate = useNavigate();
  let [loading, setLoading] = useState(true);
  const [showCover, setShowCover] = useState(false);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return ()=> clearTimeout(timer);
  },[]);

  const handleNavClick = (path) =>{
    setShowCover(true);
    setTimeout(()=>{
      navigate(path)
      setShowCover(false);
    }, 1500)
  };

  return (

    <div className="App">
      <AnimatePresence>
        {loading && <Loading></Loading>}
      </AnimatePresence>
      <Nav handleNavClick={handleNavClick}></Nav>
      <AnimatePresence>
        {showCover && <TransitionCover></TransitionCover>}
      </AnimatePresence>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}/>
        <Route path='/contacts' element={<Contacts></Contacts>}/>
      </Routes>
    </div>
  );
}

export default App;
