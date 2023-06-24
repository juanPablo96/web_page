import React from 'react'
import "./footer.css"
import GitHub from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import SocialNetwork from './SocialNetwork/SocialNetwork'


function Footer() {
    return (
      <>  
  <a href="" className='footer__link'>email</a>
  <ul className='social-list'>
    <SocialNetwork
    link="https://github.com/juanPablo96?tab=repositories"
    name={GitHub}
    
    />
    <SocialNetwork
    link="https://github.com/juanPablo96?tab=repositories"
    name={LinkedIn}
    
    />

  </ul>

      </>
  )
}

export default Footer