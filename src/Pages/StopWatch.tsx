import { useState, useEffect, useRef } from 'react';
import '../styles/stopwatch.css'

function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<number>(0);
  const intervalIdRef = useRef<number | null>(null);

  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    }

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function Start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsed;
  }

  function Stop() {
    setIsRunning(false);
  }

  function Reset() {
    setElapsed(0);
    setIsRunning(false);
  }

  function formatTime() {
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);
    const milliseconds = Math.floor((elapsed % 1000) / 10);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={Start} className="start-button">Start</button>
        <button onClick={Stop} className="stop-button">Stop</button>
        <button onClick={Reset} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
