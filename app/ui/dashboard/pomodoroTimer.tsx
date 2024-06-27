'use client'
import { useEffect, useState } from 'react';

type state = 'working' | 'shortBreak' | 'longBreak' | 'paused' | 'finished';


const TaskTimer = () => {
  const [time, setTime] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const [state , setState] = useState<state>('working');

  useEffect(() => {

    let interval: any;
    console.log('state: ' + state);
    console.log("Tiempo: " + time);
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
        if (time === 0) {
          if (state === 'working') {
            setTime(300);
            setIsRunning(false);
            setState('shortBreak');
          } else if (state === 'shortBreak') {
            setTime(1500);
            setState('working');
            setIsRunning(false);
          }
        } 
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, state]);


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button className = "" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button className="" onClick={() => {
          setTime(1500)
          setIsRunning(false)
     }}>Restart</button>
    </div>
  );
}

export default TaskTimer;