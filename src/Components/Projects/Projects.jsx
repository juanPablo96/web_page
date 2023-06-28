import React from "react";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <Link to={"porfolio"}>
      <a className="portfolio__item">
        <img src={props.img} alt="" className="portfolio__img" />
      </a>
    </Link>
  );
};

export default Projects;
