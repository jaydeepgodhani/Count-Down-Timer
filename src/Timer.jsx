import React, { useEffect, useRef, useState } from "react";

const timeToSet = 5;

const Timer = () => {
  const [time, setTime] = useState(timeToSet);
  const [buttonText, setButtonText] = useState("Start");
  var intervalId = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
    };
  }, []);


  const startStopTimer = () => {
    if (buttonText === "Start") {
      if (intervalId.current == null) {
        intervalId.current = setInterval(() => {
          setTime((time) => (time - 0.01).toFixed(2));
        }, 10);
      }
      setButtonText("Stop");
    } else {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
      setButtonText("Start");
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(timeToSet);
    setButtonText("Start");
  };

  if(time <= 0) {
    resetTimer();
  }

  return (
    <div className="text-2xl m-8 flex flex-col items-center justify-center">
      {time}
      <div className="mt-8">
        <button
          className="m-4 py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 text-white transition-colors"
          onClick={startStopTimer}
        >
          {buttonText}
        </button>
        <button
          className="m-4 py-2 px-4 rounded-lg bg-blue-500 hover:bg-red-700 text-white transition-colors"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
