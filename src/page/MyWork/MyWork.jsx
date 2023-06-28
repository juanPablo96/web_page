import React from "react";
import "./myWork.css";
import jp from "../../assets/juanpablo.jpeg";
import Projects from "../../Components/Projects/Projects";

function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
       
        A selection of my range of work
      </p>
      <div className="portfolio">
        <Projects img={jp} />
        <Projects img={jp} />
        <Projects img={jp} />
        <Projects img={jp} />
        <Projects img={jp} />
      
     
      </div>
    </section>
  );
}

export default MyWork;
