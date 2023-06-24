import React from "react";
import "./hamburger.css";

function Hamburger() {
  return (
    <button className="nav-toggle" aria-label="toggle navigation">
      <span className="hamburger"></span>
    </button>
  );
}

export default Hamburger;
