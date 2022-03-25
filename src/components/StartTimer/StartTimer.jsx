import React from "react";
import "./start-timer.scss";
import Header from "../Header/Header";

const StartTimer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <>
      <Header title="Shower Timer" />
      <div className="timers">
        <div id="display">
          {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> */}
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && (
            <>
              <button onClick={() => setTime(0)}>Reset</button>
              <button onClick={() => setTime(0)}>Finish</button>
              <button onClick={() => setTimerOn(false)}>Pause</button>
            </>
          )}
          {!timerOn && time > 0 && (
            <>
              <button onClick={() => setTime(0)}>Reset</button>
              <button onClick={() => setTime(0)}>Finish</button>
              <button onClick={() => setTimerOn(true)}>Play</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StartTimer;
