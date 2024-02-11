import {motion} from "framer-motion";

const coverVariants = {
  initial: {x: '-100vw'},
  animate: {x:0},
  exit: {x:'100vw'},
};

const TransitionCover = () =>( 
    <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    exit={{ x: '-100vw' }}
    transition={{ duration: 0.5 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: "#3D3B40",
      zIndex: 10,
    }}
  />
  );

export default TransitionCover;