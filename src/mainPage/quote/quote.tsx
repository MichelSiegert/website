import './quote.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
            <div className="quoteText">{t('CVText')}</div>
            <div className="quoter">{t('CVBottomLine')}</div>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Quote;
