import React from 'react'

function SocialNetwork(props) {
  return (
    <li className='social-list__item'><a className='social-list__link' href={props.link}><img src={props.name} alt={props.name} className='social__list--img' /></a></li>

  )
}

export default SocialNetwork