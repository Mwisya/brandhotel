import React,{useState} from 'react'
import './sideNav.css'
import { Link } from 'react-router-dom'
import { MdWhatsapp, MdAdd, MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
// import { BiChevronDown } from 'react-icons/bi'


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
          <i>logo</i>
          <MdClose onClick={onClick}/>
        </div>

        <div className='sidenav-items'>
          <Link className='navLink' to={"/"}>Home</Link>

          <div className='submenu-heading' onClick={toggle}>
             Rooms & suites <MdAdd/>
          </div>
          {open ?
          <div className='submenu-content'>
            <Link className='navLink' to={"rooms/standard-room"}>standard room</Link>

            <Link className='navLink' to={"rooms/deluxe"}>deluxe</Link>

            <Link className='navLink' to={"rooms/suite"}>suite</Link>

            <Link className='navLink' to={"rooms/double-deluxe"}>double deluxe</Link>

            <Link className='navLink' to={"rooms/executive-suite"}>executive suite</Link>
          </div> : null  }

          <Link className='navLink' to={"gallery"}>Gallery</Link>
          <Link className='navLink' to={"meetings"}>meetings & events</Link>
          <Link className='navLink' to={"Contact"}>Contact us</Link>
          <Link className='navLink' to={"about"}>About us</Link>
        </div>

        <div className='sidenav-info'>
          <div className="sidenav-contact">
            <h3>contacts</h3>
            <div>
            <a href="tel:+255750866722"> +255 750 866 722</a>
            <a href="tel:+255750866722"> +255 750 866 722</a>
            </div>
            <a href="mailto:reservations@brandhotel-dodoma.com" >reservations@brandhotel-dodoma.com</a>
            </div>

          <div className="sidenav-address">
            <h3>address</h3>
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
    </nav>
  )
}

export default SideNav