import Nav from "./nav";
import './about.css';
import '../App.css';
import {motion} from "framer-motion";

const About =  () =>
{
    return(
        <div className="about">
            <Nav></Nav>
            <motion.div className="about-bg"
            initial={{x:"-1000px", opacity:0,}}
            animate={{x:0, opacity:1,}}>
                <div className="about-container">
                    <img src="./portfolio-pic.png"></img>
                    <div className="about-intro">
                    <h2>Hello</h2>
                    <h3>I'm Mathew 'Jason' Jeong</h3>
                    <p>I'm a frontend Developer specaility in <span style={{fontWeight:"bold",}}>reactJS</span></p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About 