import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './topNav.css'

const TopNav = ({onClick}) => {
    const [open, setOpen] = useState(false)
    function openSubMenu() {
      setOpen(true)
    }
    function closeDropDown() {
        setOpen(false)
      }
  return (
    <ul className='topnav'>
        <li><NavLink className='nav-link' to={'/'}>Home</NavLink></li>
        <li><NavLink className='nav-link' to={'gallery'}>gallery</NavLink></li>
        <li className='dropdown-menu'>
            <div className='dropdown-heading' onClick={openSubMenu}>Rooms</div>
            { open ? 
            <ul className='dropdown-menu_items'  onClick={closeDropDown}>  
            <li><NavLink className='nav-link' to={'standard-room'}>standard</NavLink></li>
            <li><NavLink className='nav-link' to={'delux-room'}>delux</NavLink></li>
            <li><NavLink className='nav-link' to={'double-delux'}>double delux</NavLink></li>
            <li><NavLink className='nav-link' to={'suite'}>suite</NavLink></li>
            <li><NavLink className='nav-link' to={'executive-suite'}>executive suite</NavLink></li>
            </ul> : null  }
        </li>
        <li><NavLink className='nav-link' to={'meetings'}>meetings</NavLink></li>
        <li><NavLink className='nav-link' to={'contact'}>contact</NavLink></li>
        <li><NavLink className='nav-link' to={'about'}>about</NavLink></li>
    </ul>
  )
}

export default TopNav