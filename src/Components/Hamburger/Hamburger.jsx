import React, { useState } from "react";
import "./hamburger.css";

function Hamburger(props) {

 const navToggle = () => {
props.setNav(!props.nav)
};

  return (
   
    <button className={` nav-toggle ${props.nav? "nav-open": "nav-close"} `} aria-label="toggle navigation" onClick={navToggle}>
      <span className="hamburger"></span>
    </button>
  );
}

export default Hamburger;
