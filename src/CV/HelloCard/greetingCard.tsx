import './greetingCard.css';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Greeting() {
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
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={ctl}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="greetingContainer"
    >
      <img className="imageGreeting" src="assets/portrait.webp" alt="portrait of me leaning against a wall." />
      <div style={{ marginLeft: '10px' }}>
        <h1>
          {t('greetingHeader')}
        </h1>
        <div className="bottomTextGreeting text-justify hyphenate md:leading-12">
          {t('greetingText')}
        </div>
      </div>
    </motion.section>
  );
}

export default Greeting;
