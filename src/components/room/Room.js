import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'

const Room = ({room}) => {
  const icons = room.amenities
  
  return (
    <div className='room'>
      <div className='room-content'>
        <img src={room.image} alt="" />
        <div className='room-details'>
          <h2 className='room-type'>{room.name}</h2>
          <p className='room-desc'>{room.desc}</p>
        </div>  
      </div>
      <div className='amenities'>
        <div className='amenities-container'>
          <h3 className='amenities-heading'>amenities</h3>
          <div className='amenities-list'>
            {icons.map((i, index)=>{
              return(
                <div key={index}>
                  <i>{i.icon}</i>
                  <p>{i.title}</p>
                </div>
              )
            })}
          </div>

        </div>
        <Link to={room.link} data={room}>Explore more</Link>    
      </div>
    </div>
  )
}

export default Room