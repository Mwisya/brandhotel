import React from 'react'
import './roomLayout.css'
import { BsTelephone } from 'react-icons/bs'

const RoomLayout = ({room}) => {
  const amenitieslist = room.allAmenities;

  return (
    <main className='room-layout'>
        <section className='room-display'>
          <img src={room.image} alt="" />
          <div className='amenities-sample'>
            <h1>{room.name}</h1>
            <div className='amenities-sample_wrapper'>
              {
                room.displayAmenities.map((item, index)=>{
                  return(
                    <div key={index}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </div>

                  )
                })
              }
            </div>
          </div>
        </section>
        <section className='room-description'>
          <h1>Overview</h1>
          <p> {room.desc} </p>
        </section>
        <div className='room-items'>
          <section className='room-amenities'>
            <h1>Amenities</h1>
            <ul className="amenities-wrapper">
              { amenitieslist.map((amenity, index) => {
                return(
                    <li className='amenity' key={index}>
                      <span>{amenity.icon}</span>
                      <span>{amenity.title}</span>
                    </li>
                ) }) }
            </ul>
          </section>
          <section className='room-reservation'>
           <div className='logo'>logo</div>
          <div className='price'><i>Per Night</i>Tsh {room.price}</div>
          <h3>book now</h3>
          <div className='contact-details'>
            <BsTelephone/>
            <div>
              <a href="tel:+255773467756"> +255773467756</a>
              <a href="tel:+255750866722"> +255750866722</a>
            </div>
          </div>
          </section>
        </div>
        <section className='room-images'>
        <div className="image-1">
            <img src={room.image1} alt="" />
          </div>
         
          <div className="image-2">
            <img src={room.image2} alt="" />
          </div>
        </section>
        
    </main>
  )
}

export default RoomLayout