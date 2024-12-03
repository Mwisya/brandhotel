import React from 'react'
import './ourServices.css'
import { services } from '../../data/data'


const OurServices = () => {
 
  return (
    <section className='services'>
      <h1>Our Services</h1>
      <div className='services-wrapper'>
        <div className='offer'>
          <h2>Hospitality <br/> at it's best...</h2>
          <p>All our guests enjoy free breakfast</p>
        </div>
        <div className='figure-container'>
          <figure>

            {services.map((service, index)=>{
                return( 
                  <div key={index}>
                    <img src={service.image} alt="" />
                    <div className='service-info'>
                      <h2>{service.title}</h2>
                    </div>
                  </div>
              )})
            }
          </figure>
        </div>

      </div>
    </section>
  )
}

export default OurServices