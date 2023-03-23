import { useState, useRef, useEffect } from "react";
const fixTime = (time) => (time < 10 ? `0` + time : time);

const formatTimeToString = (time) => {
  const seconds = time % 60;
  const min = Math.floor(time / 60) % 60;
  return `00:${fixTime(min)}:${fixTime(seconds)}`;
};

function Timer() {
  const [time, setTime] = useState(0);
  const ref = useRef(null);
  // start timer
  const startTimer = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
       // STEAL CLOUSERS
      setTime((time) => time + 1);
    }, 1000);
  };
  // STOP TIMER
  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  //RESET TIMER
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };
  // CLEANUP IT
  //PREVENT IT FOR MEMORY LEAKAGE
  useEffect(()=>{
    return ()=>{
      stopTimer();
    };
  },[])
  return (
    <div>
      <h1>{formatTimeToString(time)}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
export default Timer;
