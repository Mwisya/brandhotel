import React from 'react'
import './room.css'
import { Link } from 'react-router-dom'
import { MdOutlineBed, MdOutlineRoomService, MdRoomPreferences } from 'react-icons/md'
import { FaShower, FaTv, FaWifi } from 'react-icons/fa'


const icons = [
  {icon:<MdRoomPreferences/>,title:'32M'},
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
        <h2>{room.name}</h2>
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
      </div>
      <Link to={'/accomodation'}>View Details</Link>
    </div>
  )
}

export default Room