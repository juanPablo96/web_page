import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
function NavPortfolio(props) {
  const navToggle = () => {
    props.setNav(!props.nav);
  };
  return (
    <nav className="nav">
      <Link to={"/"}>
      <ul className="nav__list">
        <li className="nav_item">
          <a href="#home" className="nav__link" onClick={navToggle}>
            Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#services" className="nav__link" onClick={navToggle}>
            My Services
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" className="nav__link" onClick={navToggle}>
            About Me
          </a>
        </li>
        <li className="nav_item">
          <a href="#work" className="nav__link" onClick={navToggle}>
            My work
          </a>
        </li>
      </ul>
      </Link>
    </nav>
  );
}

export default NavPortfolio;
