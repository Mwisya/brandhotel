import React from 'react'
import './ourServices.css'
import { services } from '../../data/data'
import { BsTelephone } from 'react-icons/bs'


const OurServices = () => {
 
  return (
    <section className='services'>
      <div className='services-wrapper'>
        <div className='offer'>
          <i>logo</i>
          <h1>Brand Hotel</h1>
          <p>we provide you wit the best accomodation for your stay, with a nice restaurant and a lounge to enjoy your sip. Unwind in the garden, it gives you a wonderful view of the surroundings. For conferences, meetings, events, we have variety of spaces to choose from. </p>
          <div className='whyUs-contact'>
            <h2>Contact Us</h2>   
            <a href="tel:+255773467756"> <BsTelephone/> +255 773 467 756</a>
          </div>
        </div>
        <div className='slider-container'>
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