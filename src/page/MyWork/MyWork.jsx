import React from "react";
import "./myWork.css";
import Portfolio from "../../Components/Portfolio/Portfolio";
import jp from "../../assets/juanpablo.jpeg";

function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
       
        A selection of my range of work
      </p>
      <div className="portfolio">
      <Portfolio img={jp} />
      <Portfolio img={jp} />
      <Portfolio img={jp} />
      <Portfolio img={jp} />
      <Portfolio img={jp} />
     
      </div>
    </section>
  );
}

export default MyWork;
