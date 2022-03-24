import React from "react";
import "./enter-manual.scss";

const EnterManual = () => {
  return (
    <div className="enter-manual__container">
      <div className="enter-manual__hero">
        <img
          src="https://cdn.dribbble.com/users/215236/screenshots/3019378/media/d2a66e8b815c1099cac26ca02523c7e0.gif"
          alt=""
          className="enter-manual__hero-image"
        />
        <div className="enter-manual__text-container">
          <h1 className="enter-manual__title">Every Drop Counts!</h1>
          <div className="enter-manual__subtitle">
            How long did you shower today?
          </div>
          <div className="enter-manual__option">
            <div className="enter-manual__option-choice"> 5 mins</div>
            <div className="enter-manual__option-choice"> 10 mins</div>
            <div className="enter-manual__option-choice"> 15 mins</div>
            <div className="enter-manual__option-choice"> 20 mins</div>
          </div>
          <div className="enter-manual__option-cta-container">
            <div className="enter-manual__option-cta"> CTA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterManual;
