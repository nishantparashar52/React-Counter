import * as React from 'react';
import { useEffect, useState } from 'react';

const Counter = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timeout;
    if (running) {
      timeout = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(timeout);
  }, [running]);
  return (
    <div>
      <div>Counter</div>
      <div>{timer}</div>
      <button type="button" onClick={() => setRunning(!running)}>
        {timer === 0 ? 'Start' : 'Stop'}
      </button>
      <button type="button" onClick={() => setTimer(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
