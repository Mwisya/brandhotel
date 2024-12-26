import React from 'react'
import './events.css'
import { MdOutlineEmail, MdCall } from 'react-icons/md'
import { meetings } from '../../data/data'
const Events = () => {
  return (
    <div className='events'>
        <div className="events-wrapper">
            {meetings.map((meeting, index)=>{
                return(
                <div className='event' key={index}>
                    <img src={meeting.image} alt="" />
                    <div className='event-details'>
                        <h2 className='event-heading'>{meeting.title}</h2>
                        <p className='event-description'>{meeting.desc}</p>
                        <div className='btn'>
                          <h3>Book now</h3>
                          <a href="tel:+255773467756">Call us</a>
                        </div>
                    </div>
                </div>    
                )
            })}
            
        </div> 
    </div>
  )
}

export default Events