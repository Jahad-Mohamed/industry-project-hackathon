import React from "react";
import { Link } from "react-router-dom";
import "./check-activiy.scss";
import edit from "../../assets/icons/edit-icon.svg";
import arrow from "../../assets/icons/arrow.svg";

const CheckActiviy = () => {
  return (
    <section className="options">
      <article className="options__container">
        <h3 className="options__header">Today's shower log</h3>
        <div className="options__timer">
          <Link to="/options/timer" className="options__button">
            <img className="options__icon" src={edit} alt="" />
            <p className="options__text">Track your time</p>
            <img className="options__icon" src={arrow} alt="" />
          </Link>
        </div>
        <div className="options__manual">
          <Link to="/options/manual" className="options__button">
            <img className="options__icon" src={edit} alt="" />
            <p className="options__text">Enter Manually</p>
            <img className="options__icon" src={arrow} alt="" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default CheckActiviy;
