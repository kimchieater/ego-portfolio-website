import './projects.css';
import Nav from './nav';
import { useRef, useState, useEffect} from 'react';
import {motion, useTransform, useScroll, useSpring} from 'framer-motion';



const Projects = () => {
    let [link, setLink] = useState(["https://kimchieater.github.io/playmegalovania/","https://kimchieater.github.io/chesswith/", "https://kimchieater.github.io/PixelArt/", "https://kimchieater.github.io/drumset/"]);

    let [intro, setIntro] = useState({title: ["PlayMegalovania", "WELCOME HOOMAN", "Pixel Art", "Drum Kit"], des: ["Interactive piano website with easter egg features, built using HTML, CSS, JavaScript, and Piano API.", "Chess game against computer using Chess API, developed with HTML, CSS, and JavaScript.", "Pixel art creation tool using grid-based HTML elements, designed with HTML, CSS, JavaScript.", "Drum kit simulator site using Web Audio API, crafted with HTML, CSS, JavaScript."]});

    let [imgs, setImgs] = useState(["projects_img_1.jpg", "projects_img_2.jpg", "projects_img_3.jpg", "projects_img_4.jpg"], );

    const [wheel, setWheel] = useState(1800);

    useEffect(()=>{
        setWheel(1400);
        const handleWheelEvent = (e) =>{
            setWheel(currentValue => {
                let newValue = currentValue + (e.deltaY > 0 ? -100 : 100);
                
                if (newValue < -1200) {
                    newValue = -1200;
                }

                const maximumValue = 1900;

                if (newValue > maximumValue){
                    newValue = maximumValue;
                }
                return newValue;
            })
        
        };
        window.addEventListener('wheel', handleWheelEvent);
        return ()=>{
            window.removeEventListener('wheel', handleWheelEvent);
        }
    }, []);
    

    return(

    

        <motion.div>
            <Nav></Nav>
            <motion.div className="projects-bg"  style={{
            }} animate={{x: wheel}}>
                
                {
                    imgs.map((imgSrc, i)=>{
                        return(
                    <div className='projects-container'>
                        <a href={`${link[i]}`} target="_blank"><img className='projects-img' src={imgSrc} alt={`Projects${i}`}></img></a>
                        <div className='projects-intro'>
                            <h1>{intro.title[i]}</h1>
                            <p>{intro.des[i]}
                            </p>
                        </div>
                </div>
                        )
                    })
                }
            </motion.div>
        
            
        </motion.div>
    )
}

export default Projects