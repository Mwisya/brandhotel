import React from 'react'
import './footer.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import {NewsLetter} from '../index'
import { MdCopyright, MdWhatsapp } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer>
      <NewsLetter/>
      <div className='footer-wrapper'>    
        <div className='footer-item'>
          <h3>Quick links</h3>
          <Link to={'/'}>Home</Link>        
          <Link to={'meetings'}>meetings & events</Link>        
          <Link to={'gallery'}>gallery</Link>        
          <Link to={'about'}>About us</Link>     
          <Link to={'contact'}>Contact us</Link>             
        </div>
        <div className='footer-item'>
          <h3>rooms & suites</h3>
          <Link to={"rooms/standard-room"}>standard room</Link>
          <Link to={"rooms/deluxe"}>deluxe</Link>
          <Link to={"rooms/twin-room"}>twin room</Link>
          <Link to={"rooms/junioor-suite"}>junior suite</Link>
          <Link to={"rooms/suite"}>suite</Link>
          <Link to={"rooms/executive-suite"}>executive suite</Link>
        </div>
        <div className='footer-address'>
          <h3>Hotel Address</h3>
          <p>P.O Box 2682,</p>
          <p>Dodoma, Tanzania </p>
          <p>Plot No 52 Mwangaza, Kisasa</p>
          <a href="tel:+255773467756"><span>Call:</span>+255 773 467 756</a>
          <a href="tel:+255750866722"><span>Call:</span>+255 750 866 722</a>
          <a href="mailto:bookings@brandhotel-dodoma.com" className='footer-email'> 
          <span>Email:</span>bookings@brandhotel-dodoma.com</a>
        </div>
      </div>
      <div className='footer-logo'>
        <img src={logo} alt=''/>
        <h3>brand hotel</h3>
        <div>  
          <a href="http://api.whatsapp.com/send?phone=+254746780271"><MdWhatsapp/></a>
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"><FaInstagram/></a>       
        </div>
      </div>
      <div className='terms-and-conditions'>
        <div>
          <Link to={'terms-and-conditions'} className='link'>Terms & Conditions</Link> |
          <Link to={'/'} className='link'>Privacy Policy</Link>
        </div>
        <p>All rights reserved</p>
        <p className='/'><MdCopyright/> Copyright 2025 </p>
      </div>  
    </footer>
  )
}

export default Footer