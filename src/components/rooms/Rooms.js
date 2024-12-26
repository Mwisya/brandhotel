import React from 'react'
import './rooms.css'
import Room from '../room/Room'


const Rooms = ({rooms}) => {
  return ( 
    <section className='rooms'>
      <h1 className='rooms-heading'>Our accomodation</h1>
      <div className='rooms-wrapper'>
        {
          rooms.map((room, index)=>{
            return <Room key={index} room={room}/>
          })
        }
      </div>
    </section>
  )
}

export default Rooms