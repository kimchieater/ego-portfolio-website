import "./App.css";
import { Routes, Route, Link} from "react-router-dom";
import Header from "./components/header.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contacts from "./components/contact.js";
import Loading from "./components/loading.js"
import {useState, useEffect} from 'react';
import {AnimatePresence} from "framer-motion";





function App() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return ()=> clearTimeout(timer);
  },[]);
  
  return (

    <div className="App">
      <AnimatePresence>
        {loading && <Loading></Loading>}
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
