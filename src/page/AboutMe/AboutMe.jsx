import React from "react";
import "./aboutMe.css"

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title sectio_title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Developer based out of Montevideo</p>

      <div className="about-me__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt sit delectus, eius, possimus provident maxime consequuntur exercitationem quisquam dolorum, assumenda suscipit soluta similique recusandae quae eum inventore quasi sed.</p>
        <p></p>
      </div>
      <img src="" alt="" className="about-me__img" />
    </section>
  );
}

export default AboutMe;
