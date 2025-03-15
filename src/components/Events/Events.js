import React from 'react'
import './events.css'
import { meetings, meetingAmenities } from '../../data/data'
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'

const Events = ({halls, amenities }) => {
  return (
    <div className='events'>
      <h2>Explore Venues</h2>
      <div className='events-wrapper'>
        {
          halls.map((hall,index)=>{
            return(
            <div className='hall' key={index}>

              <div className='hall-details'>
                <div className='hall-image'>
                  <img src={hall.image} alt="" />
                </div>
                <div>
                  <h3>{hall.title}</h3>
                  <p>{hall.desc}</p>
                </div>
              </div>
            
            </div>
            )
          })
        }

        <div className='hall-amenities-wrapper'>
          <h3>Meeting & events amenities</h3>
          <div className='hall-amenities'>
          { amenities.map((a, i)=>{
            return(
                <div key={i} className='hall-amenity'>
                  <span>{a}</span>
                </div>
            )
          })}
        </div>
        </div>


      <div className='hall-contacts'>
        <h3>Contact information</h3>
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