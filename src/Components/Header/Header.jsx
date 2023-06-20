import React from "react";
import logo from "../../assets/logo.jpeg"
import "./header.css"
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
function Header() {
  return (
    <>
    <div className="logo">
      <img src={logo} alt="photo of Juan Pablo" />
    </div>
    

<Button/>
<Nav/>

    </>
  );
}

export default Header;
