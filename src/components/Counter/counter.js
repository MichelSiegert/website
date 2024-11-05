import React, { useEffect, useRef, useState } from 'react';
import "./counter.css"
function Counter({ target, duration }) {
  const [count, setCount] = useState(0);
  const start = 0;
  const requestRef = useRef();

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animateCounter = (startTime) => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    const currentValue = Math.floor(start + easedProgress * (target - start));
    setCount(currentValue);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(() => animateCounter(startTime));
    }
  };

  useEffect(() => {
    const startTime = performance.now();
    requestRef.current = requestAnimationFrame(() => animateCounter(startTime));

    return () => cancelAnimationFrame(requestRef.current);
  }, [target, duration]);

  return <div className='counter'>{count}</div>;
}

export default Counter;