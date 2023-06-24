import React from "react";
import "./footer.css";
import GitHub from "../../assets/svg/github (1).svg";
import LinkedIn from "../../assets/svg/linkedin.svg";
import SocialNetwork from "./SocialNetwork/SocialNetwork";

function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="juanpablor1996@gmail.com" className="footer__link">
        juanpablor1996@gmail.com
        </a>
        <ul className="social-list">
          <SocialNetwork
            link="https://github.com/juanPablo96?tab=repositories"
            name={GitHub}
          />
          <SocialNetwork
            link="https://github.com/juanPablo96?tab=repositories"
            name={LinkedIn}
          />
        </ul>
      </footer>
    </>
  );
}

export default Footer;
