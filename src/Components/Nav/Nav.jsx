import React from 'react'

function Nav() {
  return (
  <nav className='nav'>
    <ul className='nav__list'>
        <li className='nav_item'><a href="#home" className='nav__link'>Home</a></li>
        <li className='nav_item'><a href="#services" className='nav__link'>My Services</a></li>
        <li className='nav_item'><a href="#about" className='nav__link'>About Me</a></li>
        <li className='nav_item'><a href="#" className='nav__link'>My work</a></li>

    </ul>
  </nav>
  )
}

export default Nav