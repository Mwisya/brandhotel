import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'

const Room = ({room}) => {
  return (
    <div className='room'>
      <img src={room.image} alt="" />
      <div className='room_info'>
        <h2>{room.name}</h2>
        <p>{room.desc}</p>
        <Link to={'/accomodation'}>View Details</Link>
      </div>
    </div>
  )
}

export default Room