import React from "react";

import "./header.css"
import Nav from "../Nav/Nav";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../assets/logo.png"
function Header() {
  return (
    <>
    <div className="logo">
    <img src={logo} alt="" className="logo__img" />
    </div>
    

<Hamburger/>
<Nav/>

    </>
  );
}

export default Header;
