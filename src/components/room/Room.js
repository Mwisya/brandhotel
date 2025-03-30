import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'

const Room = ({room}) => {
  const icons = room.amenities
  
  return (
    <div className='room-type'>
      <div className='room-type-content'>
        <div className='room-type-image'>
          <img src={room.image} alt="" />
        </div>
        <div className='room-type-details'>
          <h2 className='room-type-name'>{room.name}</h2>
          <p className='room-type-desc'>{room.desc}</p>
        </div>  
      </div>
      <div className='amenities'>
        <div className='amenities-container'>
          <h3 className='amenities-heading'>amenities</h3>
          <div className='amenities-list'>
            { icons.map((i, index)=>{
              return(
                <div key={index}>
                  <i>{i.icon}</i>
                  <span>{i.title}</span>
                </div>
              )}) }
          </div>
        </div>
        <Link to={room.link} data={room}>Explore more</Link>    
      </div>
    </div>
  )
}

export default Room