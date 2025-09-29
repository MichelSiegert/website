import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './lang.css';
import Ts from './subcomponents/ts.tsx';
import Java from './subcomponents/java.tsx';
import Python from './subcomponents/python.tsx';
import Dart from './subcomponents/dart.tsx';

function Lang() {
  const [index, setIndex] = useState(0);
  const context = [<Ts key="ts" />, <Java key="java" />, <Python key="python" />, <Dart key="dart" />];
  const ctl = useAnimation();

  const variants = {
    left: { x: -100, opacity: 0 },
    middle: { x: 0, opacity: 1 },
    right: { x: 100, opacity: 0 },
  };

  const handleOptionClick = (newIndex: number) => {
    if (newIndex === index) return;
    if (newIndex > index) {
      ctl.start('left');

      setTimeout(() => {
        setIndex(newIndex);
        ctl.start('right');
      }, 250);

      setTimeout(() => {
        setIndex(newIndex);
        ctl.start('middle');
      }, 500);
      return;
    }

    ctl.start('right');

    setTimeout(() => {
      setIndex(newIndex);
      ctl.start('left');
    }, 250);

    setTimeout(() => {
      setIndex(newIndex);
      ctl.start('middle');
    }, 500);
  };

  return (
    <div className="languagesSection">
      <div className="Iconbar animated-text-container">
        <button type="button" onClick={() => handleOptionClick(0)}>
          <img
            className={index === 0 ? 'icon' : 'unselectedIcon'}
            src="assets/ts.webp"
            alt="TypeScript"
          />
        </button>
        <button type="button" onClick={() => handleOptionClick(1)}>
          <img
            className={index === 1 ? 'icon' : 'unselectedIcon'}
            src="assets/java.webp"
            alt="Java"
          />
        </button>

        <button type="button" onClick={() => handleOptionClick(2)}>
          <img
            className={index === 2 ? 'icon' : 'unselectedIcon'}
            src="assets/python.webp"
            alt="Python"
          />
        </button>

        <button type="button" onClick={() => handleOptionClick(3)}>
          <img
            className={index === 3 ? 'icon' : 'unselectedIcon'}
            src="assets/dart.webp"
            alt="Dart"
          />
        </button>
      </div>
      <motion.div
        className="mainBody"
        animate={ctl}
        transition={{ duration: 0.25, delay: 0.0 }}
        variants={variants}
        initial="middle"
      >
        {context[index]}
      </motion.div>
      <div className="continueButton"> </div>
    </div>
  );
}

export default Lang;
