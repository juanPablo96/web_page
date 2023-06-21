import React from "react";

const Porfolio = (props) => {
  return (
    <div className="portfolio">
      <a href="#" className="portfolio__item">
        <img src={props.img} alt="" className="porfolio__img" />
      </a>
    </div>
  );
};

export default Porfolio;
