import './quote.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Quote() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  const ctl = useAnimation();

  useEffect(() => {
    if (isInview) {
      ctl.start('visible');
    }
  }, [isInview, ctl]);

  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      ref={ref}
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={ctl}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="quoteBox">
          <div className="startQuote">&#34;</div>
          <span>
            <div className="quoteText">Mr. Siegert demonstrated that he could quickly adapt to new tasks. After a very short time, he was able to apply the acquired technical knowledge very successfully to the work processes. In new situations, Mr. Siegert always adapted confidently and very well due to his very quick comprehension skills. Thanks to his good endurance and stress resilience, he kept a cool head even in difficult situations and was able to act constructively.</div>
            <div className="quoter">-Crossnative employment reference</div>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Quote;
