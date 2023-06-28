import React, { useState } from "react";

import "./header.css";
import Nav from "../Nav/Nav";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../assets/logo.png";
import NavPortfolio from "../Nav/NavPortfolio";
function HeaderPortfolio() {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" className="logo__img" />
      </div>
      <div className={` nav-toggle ${nav ? "nav-open" : "nav-close"} `}>
        <Hamburger nav={nav} setNav={setNav} />
        <NavPortfolio nav={nav} setNav={setNav} />
      </div>
    </header>
  );
}

export default HeaderPortfolio;
