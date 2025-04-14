import React,{useState} from 'react'
import './sideNav.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import {MdAdd, MdClose } from 'react-icons/md'


const SideNav = ({onClick}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => { 
    if(!open){ setOpen(true)} 
    else{setOpen(false)}
   };
 
  return (
    <nav className='sidenav-backdrop'>
    <div className='sidenav'>
      <div className='sidenav-logo'>
        <img src={logo} alt=''/> <MdClose onClick={onClick}/>
      </div>
      <div className='sidenav-items'>
        <Link className='navLink' to={"/"} onClick={onClick}>Home</Link>
        <div className='submenu-heading' onClick={toggle}>
            Rooms & Suites <MdAdd/>
        </div>
        { open ?
        <div className='submenu-content'>
          <Link className='navLink' to={"rooms/standard-room"} onClick={onClick}>standard room</Link>
          <Link className='navLink' to={"rooms/deluxe"} onClick={onClick}>deluxe room</Link>
          <Link className='navLink' to={"rooms/double-deluxe"} onClick={onClick}>double deluxe</Link>
          <Link className='navLink' to={"rooms/suite"} onClick={onClick}>suite</Link>
          <Link className='navLink' to={"rooms/executive-suite"} onClick={onClick}>executive suite</Link>
        </div> : null  }
        <Link className='navLink' to={"meetings"} onClick={onClick}>meetings & events</Link>
        <Link className='navLink' to={"gallery"} onClick={onClick}>Gallery</Link>
        <Link className='navLink' to={"Contact"} onClick={onClick}>Contact us</Link>
        <Link className='navLink' to={"about"} onClick={onClick}>About us</Link>
      </div>
      <div className="sidenav-contact">
        <h2>contact information</h2>
        <h3>Reservations</h3>
        <div className='sidenav-contact_tel' >
          <a href="tel:+255750866722"> +255 750 866 722</a>
          <a href="tel:+255750866722"> +255 750 866 722</a>
          <a href="mailto:reservations@brandhotel-dodoma.com"  className='email'>reservations@brandhotel-dodoma.com</a>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default SideNav