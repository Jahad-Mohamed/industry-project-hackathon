import React from "react";
import { Link } from "react-router-dom";
import "./check-activiy.scss";

const CheckActiviy = () => {
  return (
    <section className="options">
      <article className="options__container">
        <Link to="/options/timer" className="options__timer">
          TIMER
        </Link>
        <Link to="/options/manual" className="options__manual">
          MANUALLY ENTER
        </Link>
      </article>
    </section>
  );
};

export default CheckActiviy;
