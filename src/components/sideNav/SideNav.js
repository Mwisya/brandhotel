import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../contact/Contact'

const SideNav = () => {
  return (
    <nav className='sidenav'>
        <ul>
            <li><NavLink to={/}>Home</NavLink></li>
            <li><NavLink to={accomodation}>Accomodation</NavLink></li>
            <li><NavLink to={galllery}>Gallery</NavLink></li>
            <li><NavLink to={Contact}>Contact</NavLink></li>
            <li><NavLink to={about}>About</NavLink></li>
            <li><NavLink to={}>Experiences</NavLink></li>
        </ul>
    </nav>
  )
}

export default SideNav