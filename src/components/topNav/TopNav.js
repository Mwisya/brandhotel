import React from 'react'
import { Link } from 'react-router-dom'
import './topNav.css'
import { BiChevronDown } from 'react-icons/bi'

const TopNav = () => {
  return (
    <nav className='topnav'>
      <Link className='topnav-link' to={'/'}>Home</Link>
      <div className='dropdown'>
        <button>rooms <i><BiChevronDown/></i> </button>

        <div className='dropdown-menu'>  
          <Link className='topnav-sublink' to={'rooms/standard-room'}>standard room</Link>
          <Link className='topnav-sublink' to={'rooms/deluxe'}>deluxe</Link>
          <Link className='topnav-sublink' to={'rooms/twin-room'}>twin room</Link>
          <Link className='topnav-sublink' to={'rooms/junior-suite'}>junior suite</Link>
          <Link className='topnav-sublink' to={'rooms/suite'}>suite</Link>
          <Link className='topnav-sublink' to={'rooms/executive-suite'}>executive suite</Link>
        </div>   
      </div>
      <Link className='topnav-link' to={'meetings'}>meetings</Link>
      <Link className='topnav-link' to={'gallery'}>gallery</Link>
      <Link className='topnav-link' to={'contact'}>contact</Link>
      <Link className='topnav-link' to={'about'}>about</Link>
    </nav>
  )
}

export default TopNav