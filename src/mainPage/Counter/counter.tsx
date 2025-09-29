import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import './counter.css';

function Counter({ target, duration, decimals = 0 }:
  { target: number; duration: number; decimals: number }) {
  const [count, setCount] = useState(0);
  const start = 0;
  const requestRef = useRef<number>();

  const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateCounter = useCallback((startTime: number) => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    const currentValue = start + easedProgress * (target - start);

    // round to desired decimal places
    const roundedValue = Number(currentValue.toFixed(decimals));
    setCount(roundedValue);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(() => animateCounter(startTime));
    }
  }, [duration, target, decimals]);

  useEffect(() => {
    const startTime = performance.now();
    requestRef.current = requestAnimationFrame(() => animateCounter(startTime));

    return () => cancelAnimationFrame(requestRef.current);
  }, [target, duration, animateCounter]);

  return (
    <div className="counter">
      {count}
      {decimals > 0 ? '%' : ''}
    </div>
  );
}

export default Counter;
