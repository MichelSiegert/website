import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import './counter.css';

function Counter({ target, duration }: any) {
  const [count, setCount] = useState(0);
  const start = 0;
  const requestRef:any = useRef();

  const easeInOutQuad = (t: any) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateCounter = useCallback((startTime: any) => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    const currentValue = Math.floor(start + easedProgress * (target - start));
    setCount(currentValue);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(() => animateCounter(startTime));
    }
  }, [duration, target]);

  useEffect(() => {
    const startTime = performance.now();
    requestRef.current = requestAnimationFrame(() => animateCounter(startTime));

    return () => cancelAnimationFrame(requestRef.current);
  }, [target, duration, animateCounter]);

  return <div className="counter">{count}</div>;
}

export default Counter;
