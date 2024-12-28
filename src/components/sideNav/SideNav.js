import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose} from 'react-icons/md'
import './sideNav.css'
import { BiChevronDown } from 'react-icons/bi'


const SideNav = ({onClick}) => {
  const [open, setOpen] = useState(false)
  function openSubMenu() {
    setOpen(true)
  }

  return (
    <nav className='sidenav'>
      <div className='close-nav' onClick={onClick}><MdClose/></div>
      <div className='sidenav-logo'>
        <i>logo</i>
        <h3>Brand Hotel</h3>
      </div>

      <ul className='sidenav-items'>
        <li><NavLink  onClick={onClick} className='navLink' to={"/"}>Home</NavLink></li>
        <li className='sub-menu' onClick={openSubMenu}> 
          <div className='sub-menu_heading'>our Rooms <BiChevronDown/> </div>
          {open && 
          <ul>  
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/standard-room"}>standard room</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/delux"}>delux</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/double-delux"}>double delux</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/suite"}>suite</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/executive-suite"}>executive suite</NavLink> </li>
          </ul>
          }
        </li>
        <li><NavLink onClick={onClick} className='navLink' to={"gallery"}> Gallery</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"meetings"}> meetings & events</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"Contact"}>Contact us</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"about"}>About us</NavLink></li>
      </ul>
    </nav>
  )
}

export default SideNav