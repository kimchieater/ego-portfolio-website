import "./header.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Nav from "./nav.js";

export default function Header() {
  let [imgNums, setImgNums] = useState([
    { img: 1, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 2, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 3, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 4, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 5, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 6, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 7, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 8, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 9, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
    { img: 10, position: { x: -100, y: -100 }, isOn: false, isAnimate: false },
  ]);
  const [animationState, setAnimationState] = useState("hidden");

  let [displayState, setDisplayState] = useState("none");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let [lastCoor, setLastCoor] = useState(null);
  let [nextImgIndex, setNextImgIndex] = useState(0);

  useEffect(() => {
    setAnimationState("visible");

    const timeOut = setTimeout(() => {
      setAnimationState("hidden");
    }, 100);

    return () => clearTimeout(timeOut);
  }, [nextImgIndex]);

  let spawnImg = (coor) => {
    let newPosition = { x: coor.clientX, y: coor.clientY };

    if (lastCoor) {
      const dx = newPosition.x - lastCoor.x;
      const dy = newPosition.y - lastCoor.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 50) {
        return;
      }
    }

    setImgNums((prevNums) => {
      return prevNums.map((item, index) => {
        if (index === nextImgIndex) {
          return { ...item, position: newPosition };
        }
        return item;
      });
    });

    setNextImgIndex((number) => {
      if (number >= imgNums.length - 1) {
        return 0;
      } else {
        return number + 1;
      }
    });

    setLastCoor(newPosition);
  };

  return (
    <div>

      <div
        className="header"
        onMouseMove={(coordinate) => {
          setDisplayState("block");
          spawnImg(coordinate);
        }}
        onMouseLeave={() => {
          setDisplayState("none");
        }}
      >
        <h1>Strive Untiringly.</h1>

        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[0].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[0].position.x - 100}px, ${
              imgNums[0].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[1].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[1].position.x - 100}px, ${
              imgNums[1].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[2].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[2].position.x - 100}px, ${
              imgNums[2].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[3].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[3].position.x - 100}px, ${
              imgNums[3].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[4].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[4].position.x - 100}px, ${
              imgNums[4].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[5].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[5].position.x - 100}px, ${
              imgNums[5].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[6].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[6].position.x - 100}px, ${
              imgNums[6].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[7].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[7].position.x - 100}px, ${
              imgNums[7].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[8].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[8].position.x - 100}px, ${
              imgNums[8].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
        <motion.img
          initial="hidden"
          animate={animationState}
          variants={fadeIn}
          src={`/img${imgNums[9].img}.png`}
          className="header-img"
          style={{
            transform: `translate3d(${imgNums[9].position.x - 100}px, ${
              imgNums[9].position.y - 200
            }px, 0)`,
            display: `${displayState}`,
          }}
        ></motion.img>
      </div>
    </div>
  );
}
