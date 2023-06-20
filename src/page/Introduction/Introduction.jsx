import React from "react";
import jp from "../../assets/juanpablo.jpeg"

const Introduction = () => {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title  section__title--intro">
          Hi, I am <strong>Juan Pablo Rodriguez</strong>
        </h1>

        <p className="section__subtitle section__subtitle--intro"></p>
        <img src={jp} alt="a picture of Juan Pablo Rodriguez smiling" />
      </section>
    </>
  );
};

export default Introduction;
