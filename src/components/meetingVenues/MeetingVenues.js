import React from 'react'
import './meetingVenues.css'
import { Link } from 'react-router-dom'

const MeetingVenues = ({data}) => {
  const {venues} = data
  return (
    <section className='meeting-venues-container'>
      <div className="meeting-venues-wrapper">
          <div className="meeting-venues-overview">
            <h2>{venues.venuesName} </h2>
            <p>{venues.venuesContent}       
            </p>
            {/* <a href="/meetings">explore venues</a> */}
            <Link to="/meetings" className='meeting-page-link' >Explore more</Link>  
          </div>

          <div className="meeting-venues">
            {
              venues.venuesImages.map((item, index)=>{
                return(
              <div key={index} className="meeting-venue">
                  <img src={item.image} alt="" />
                  <h2>{item.venue} </h2>     
              </div>
                )
              })
            }
            
          </div>
      </div>
    </section>
  )
}

export default MeetingVenues