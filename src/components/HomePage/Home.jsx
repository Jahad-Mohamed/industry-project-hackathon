import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <article className="home__container">
        <h3 className="home__header">March</h3>
        <div className="home__money">Money</div>
        <div className="home__water">Water</div>
        <div className="home__water">Time</div>
        <Link to="/options" className="home__options">
          Options
        </Link>
      </article>
    </section>
  );
};

export default Home;
