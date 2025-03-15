import React from 'react'
import './meetingVenues.css'

const MeetingVenues = ({data}) => {
  const {venues} = data
  return (
    <section className='meeting-venues-container'>
      <div className="meeting-venues-wrapper">
          <div className="meeting-venues-overview">
            <h2>{venues.venuesName} </h2>
            <p>{venues.venuesContent}           
            </p>
            <a href="meetings">explore venues</a>
          </div>

          <div className="meeting-venues">
            {
              venues.venuesImages.map((item, index)=>{
                return(
              <div key={index} className="meeting-venue">
                  <img src={item.image} alt="" />
                  <div>
                      <h3>{item.venue} </h3>
                  </div>
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