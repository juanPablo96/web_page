import React from 'react'
import Service from '../MyServices/EachService/Service'


function MyServices() {
  return (
    <section className='my-services' id='services'>

        <h2 className='section__title section__title--services'> What I do</h2>
        <div className='services'>
          <Service
          serviceName="Design"
          serviceDetail="I make"
          />
          <Service
          serviceName="Design + Develpoment"
          serviceDetail="I make"
          />
        </div>
        <a href="#work" className='btn'>My Work</a>
    </section>
  )
}

export default MyServices