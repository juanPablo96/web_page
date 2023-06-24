import React from "react";

const Portfolio = (props) => {
  return (
    
      <a href="#" className="portfolio__item">
        <img src={props.img} alt="" className="portfolio__img" />
      </a>
    
  );
};

export default Portfolio;

