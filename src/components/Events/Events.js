import React from 'react'
import './events.css'
import { MdOutlineEmail, MdCall } from 'react-icons/md'
import { meetings } from '../../data/data'
const Events = () => {
   
  return (
    <div className='events'>
        <div className='events-article'>
            <article>
                <h2 className='line'>overview</h2>
                <p>
                Plan your next Conference, Meeting, Graduation ceremonies, Party or family Get together at our facility. We are equiped to make sure all your need and wants are all met to make any activity a success.
                Our facility is capabile of catering to large group be it a conference or meeting. We delivery unique curlinary experience to our guest not forgetting affordable rooms for  your desired accomadation from Standard rooms to Executive Suite rooms

                </p>
            </article>
        </div>
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
        <div className="contact">
            <h2>Talk to us</h2>
            <label htmlFor="call">
            <i><MdCall/></i>
            <a href="tel:+255773467756" id='call'>+255-773-467-756</a>
            </label>
            <label htmlFor="call">
            <i><MdCall/></i>
            <a href="tel:+255750866722" id='call'>+255-750-866-722</a>
            </label>
            <label htmlFor="email">
            <i><MdOutlineEmail/></i>
            <a href="mailto:brandhotel4" id='email'>Brandhotel4@gmail.com</a>
            </label>
        </div>
    </div>
  )
}

export default Events