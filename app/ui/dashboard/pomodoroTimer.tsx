'use client'
import { useEffect, useState } from 'react';
import { digitalClock } from '@/app/ui/fonts';
import { getServerSession } from 'next-auth';



type state = 'working' | 'shortBreak' | 'longBreak' | 'paused' | 'finished';

const updateStats = async (time: number) => {
  const response = await fetch('/api/updateStats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      duration: time,
    }),
  });
  const data = await response.json();
  console.log(data);
}

const TaskTimer = () => {
  const Trabajo = 10;
  const [time, setTime] = useState(Trabajo);
  const [isRunning, setIsRunning] = useState(false);
  const [state , setState] = useState<state>('working');
  const [contadorPeriodos, setContadorPeriodos] = useState(0);
  const DescansoCorto = 180;
  const DescansoLargo = 600;


  useEffect(() => {
    let interval:any; 
  
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            if (state === 'working' && contadorPeriodos < 2) {
              setState('shortBreak');
              setIsRunning(false);
              setContadorPeriodos(contadorPeriodos + 1);
              updateStats(Trabajo);
              return DescansoCorto; // Tiempo para el descanso corto
            } else if (state === 'working' && contadorPeriodos === 2) {
                      setState('longBreak');
                      setIsRunning(false);
                      setContadorPeriodos(0);
                      return DescansoLargo; // Tiempo para el descanso largo
                    } else if (state === 'shortBreak') {
                              setState('working');
                              setIsRunning(false);
                              return Trabajo; // Tiempo para trabajar nuevamente
                            } else if (state === 'longBreak') {
                                        setTime(DescansoLargo);
                                        setState('working');
                                        setIsRunning(false);
                                        setIsRunning(false);
                                        setContadorPeriodos(0);
                            }
            return -1; //Solamente para que no de error prev time
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [isRunning, state, contadorPeriodos]);
  


  const formatTime = (time: number) => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div className = "">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-8xl font-thin leading-tight text-white-800">
            <h1 className={digitalClock.className}>{formatTime(time)}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto"> 
        <div className="flex flex-row items-center justify-center">  
          <button className = "mx-5 bg-gray-800 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300" 
            onClick={() => {setIsRunning(!isRunning)}}>
              {isRunning ? 'Pause' : 'Start'}
          </button>
          <button className="mx-5 bg-gray-800 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300" 
              onClick={() => {
                setTime(Trabajo)
                setIsRunning(false)

                }}>Restart</button>              
        </div>  
      </div>
      
    </div>
  );
}

export default TaskTimer;