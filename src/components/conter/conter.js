
import React, { useEffect, useState } from "react";
import './conter.css'


function Counter({ target=150 }) {
  const [count, setCount] = useState(0);
  const [targetNumber, setTargetNumber] = useState(target);
  const duration = 1; // duração da animação em segundos

  useEffect(() => {
    let startTime;
    setTargetNumber(target)
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(1, elapsed / duration);
      setCount(Math.floor(progress * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, []);

  return (
    <div id="counter" className="counter">
        {count}
    </div>
  )
}
export default Counter