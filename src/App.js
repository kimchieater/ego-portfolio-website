import "./App.css";
import { Routes, Route, Link} from "react-router-dom";
import Header from "./components/header.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contacts from "./components/contact.js";



function App() {
  return (

    <div className="App">
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
