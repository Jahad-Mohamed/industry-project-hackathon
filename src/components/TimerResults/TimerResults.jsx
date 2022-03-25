import React from "react";
import "./timer-results.scss";
import timer from "../../assets/icons/carbon_timer.svg";
import pounds from "../../assets/icons/pounds.svg";
import droplet from "../../assets/icons/droplet.svg";
import bulb from "../../assets/icons/light-bulb.svg";

const TimerResults = () => {
  return (
    <div className="results__container">
      <h1 className="results__title">Your shower time</h1>
      <div className="results__timer-container-main">
        <div className="results__timer-container">
          <div className="results__timer">
            <div className="results__timer-top">
              <img src={timer} alt="timer" />
              <div className="results__time"> 5:02</div>
            </div>
            <div className="results__timer-top">New Best!</div>
          </div>
        </div>
      </div>

      <div className="results__comment">
        Awesome! You're on fire in saving water
      </div>
      <div className="results__saving-container">
        <div className="results__saving">
          <img src={pounds} alt="pounds" />
          <div> 20 </div>
        </div>
        <div className="results__saving">
          <img src={droplet} alt="pounds" />
          <div> 20L </div>
        </div>
      </div>
      <div className="results__info-container">
        <img src={bulb} alt="pounds" />
        <div>
          <h3>Did you know</h3>
          <p>
            Reducing your shower time by 2 minutes will save you £25 a year and
            5000 litres of water
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerResults;
