import React from "react";
import "./introduction.css"
import jp from "../../assets/juanpablo.jpeg";

const Introduction = () => {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title  section__title--intro">
          Hi, I am <strong>Juan Pablo Rodriguez</strong>
        </h1>

        <p className="section__subtitle section__subtitle--intro">
          Full-Stack Developer
        </p>
        <img src={jp} alt="a picture of Juan Pablo Rodriguez smiling" className="intro__img" />
      </section>
    </>
  );
};

export default Introduction;
