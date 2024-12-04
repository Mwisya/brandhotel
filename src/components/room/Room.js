import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'
import { MdOutlineBed, MdOutlineRoomService, MdRoomPreferences } from 'react-icons/md'
import { FaShower, FaTv, FaWifi } from 'react-icons/fa'


const icons = [
  {icon:<MdRoomPreferences/>,title:'Big rooms'},
  {icon:<MdOutlineBed/>,title:'King bed'},
  {icon:<FaTv/>,title:'smart Tv'},
  {icon:<FaWifi/>,title:'Wi-fi'},
  {icon:<FaShower/>,title:'rain shower'},
  {icon:<MdOutlineRoomService/>,title:'room service'},
]

const Room = ({room}) => {
  return (
    <div className='room'>
      <img src={room.image} alt="" />
      <div className='room_info'>
        <h1>{room.name}</h1>
        <p>{room.desc}</p>
        <h2 className='icons-heading'>amenites</h2>
        <ul className='icons'>
          {icons.map((i, index)=>{
            return(
              <li key={index}>
                <i>{i.icon}</i>
                <h4>{i.title}</h4>
              </li>
            )
          })}
        </ul>
      <Link to={'/accomodation'}>Explore more</Link>
      </div>
    </div>
  )
}

export default Room