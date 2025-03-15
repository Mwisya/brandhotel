import React from 'react'
import './hotelTour.css'

const HotelTour = ({data}) => {
  return (
    <section className='hotel-tour'>
      <h2>virtual Tour</h2>
      <video src={data} type="video/mp4" poster controls  preload='auto' muted ></video>
    </section>
  )
}

export default HotelTour