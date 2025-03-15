import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdWhatsapp, MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import './sideNav.css'


const SideNav = ({onClick}) => {
  const [open, setOpen] = useState(false)
  const [button, setButton] = useState(false)
  
  const toggle = () => { 
    setOpen(!open)
    setButton(!button)
   }
 

  return (
    <div className='sidenav'>
      <div className='sidenav-logo'>
        <div>
          <i>logo</i>
          <h3>Brand Hotel</h3>
        </div>
      <button type='button' className='close-nav' onClick={onClick}><MdClose/></button>
      </div>

      <ul className='sidenav-items'>
        <li><NavLink  onClick={onClick} className='navLink' to={"/"}>Home</NavLink></li>
        <li className='sub-menu' onClick={toggle}> 

          <div className='sub-menu_heading'>Rooms & suites <BiChevronDown/> </div>

          {open ?
          <ul>  
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/standard-room"}>standard room</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/deluxe"}>deluxe</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/double-deluxe"}>double deluxe</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/suite"}>suite</NavLink> </li>
            <li> <NavLink  onClick={onClick} className='navLink' to={"rooms/executive-suite"}>executive suite</NavLink> </li>
          </ul> : null
          }
        </li>
        <li><NavLink onClick={onClick} className='navLink' to={"gallery"}> Gallery</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"meetings"}> meetings & events</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"Contact"}>Contact us</NavLink></li>
        <li><NavLink onClick={onClick} className='navLink' to={"about"}>About us</NavLink></li>
      </ul>

      <div className='sidenav-info'>
        <div className="sidenav-contact">
          <h4>contacts</h4>
          <div>
          <a href="tel:+255750866722"> +255 750 866 722</a>
          <a href="tel:+255750866722"> +255 750 866 722</a>
          </div>
          <a href="mailto:reservations@brandhotel-dodoma.com" >reservations@brandhotel-dodoma.com</a>
          </div>

        <div className="sidenav-address">
          <h4>address</h4>
          <p>Brand Hotel Dodoma, Kisasa Road</p>
          <p>2222-5555 Dodoma, Tanzania</p>
        </div>

        <div className="sidenav-social-media">
          <a href="http://api.whatsapp.com/send?phone=+254746780271"><MdWhatsapp/></a>          
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
          <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
        </div>
      </div>
    </div>
  )
}

export default SideNav