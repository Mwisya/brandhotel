import React from 'react'
import './events.css'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'

const Events = ({halls, amenities }) => {
  return (
    <div className='events'>
      <div className='events-wrapper'>
        {
          halls.map((hall,index)=>{
            return(
            <div className='hall' key={index}>
              <div className='hall-details'>
                <div>
                  <h2>{hall.title}</h2>
                  <p>{hall.desc}</p>
                </div>
                <div className='hall-image'>
                  <img src={hall.image} alt="" />
                </div>
              </div>       
            </div>
            )
          })
        }

      <div className='hall-amenities-wrapper'>
        <h2>Meeting & events amenities</h2>
        <div className='hall-amenities'>
        { amenities.map((a, index)=>{
          return(
              <div key={index} className='hall-amenity'>
                <span>{a}</span>
              </div>
          )
        })}
      </div>
      </div>
      <div className='hall-contacts'>
        <h2>Contact information</h2>
        <p>
          Contact our team of experts to help make your meeting a success
        </p>
        <a href="tel:+255750866722"> <MdPhone/> +255 750 866 722</a>
        <a href="mailto:reservations@brandhotel-dodoma.com" > <MdOutlineEmail/> reservations@brandhotel-dodoma.com</a>
      </div>

      </div>
    </div>
  )
}

export default Events