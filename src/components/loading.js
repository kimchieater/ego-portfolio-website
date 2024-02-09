import './loading.css';
import {motion} from "framer-motion";

function Loading(){
  return(
    <motion.div className="loading"
    initial={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      <h1>Strive Untiringly.</h1>
    </motion.div>
  )
}

export default Loading;

