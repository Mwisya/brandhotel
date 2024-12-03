import React from 'react'
import './rooms.css'
import Room from '../room/Room'
import { room } from '../../data/data'

const Rooms = () => {
  const rooms = [
    {
      image: room.image,
      name: 'standard single rooms',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      link: 'accomodation'
    },
    {
      image: room.image,
      name: 'delux rooms',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      link: 'accomodation'
    },
    {
      image: room.image,
      name: 'double delux rooms',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      link: 'accomodation'
    },
    {
      image: room.image,
      name: 'suite rooms',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      link: 'accomodation'
    },
    {
      image: room.image,
      name: 'executive suite rooms',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      link: 'accomodation'
    },
  ]
  return (
    <section className='rooms'>
      <h1>Our rooms</h1>
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