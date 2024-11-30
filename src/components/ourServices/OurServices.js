import React from 'react'
import './ourServices.css'
import { services } from '../../data/data'

const OurServices = () => {

  return (
    <section className='services'>
      <h1>Our Services</h1>
      <div className='services-container'>
        {services.map((service, index)=>(
          <div key={index} className='service'>
              <img src={service.image} alt="" />
              <h2>{service.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices