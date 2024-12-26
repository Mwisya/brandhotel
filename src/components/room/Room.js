import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'

const Room = ({room}) => {
  const icons = room.amenities
  
  return (
    <div className='room'>
      <img src={room.image} alt="" />
      <div className='room-content'>
        <h2 className='room-type'>{room.name}</h2>
        <p className='room-desc'>{room.desc}</p>
        
        <h3 className='amenities-heading'>amenities</h3>
        <ul className='amenities-container'>
          {icons.map((i, index)=>{
            return(
              <li key={index}>
                <i>{i.icon}</i>
                <h4>{i.title}</h4>
              </li>
            )
          })}
        </ul>
      <Link to={room.link} data={room}>Explore more</Link>
      </div>
    </div>
  )
}

export default Room