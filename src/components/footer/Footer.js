import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {NewsLetter} from '../index'
import { MdCopyright, MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <NewsLetter/>
      <div className='footer-wrapper'>
        
        <div className='footer-item'>
          <h3>Quick links</h3>
          <ul className='footer-links'>
            <li>
              <Link className='quick-link' to={'/'}>Home</Link>
            </li>    
            <li>
              <Link  className='quick-link' to={'meetings'}>meetings & events</Link>
            </li>
            <li>
              <Link  className='quick-link' to={'gallery'}>gallery</Link>
            </li>
            <li>
              <Link  className='quick-link' to={'about'}>About us</Link>
            </li>
            <li>
              <Link  className='quick-link' to={'contact'}>Contact us</Link>     
            </li>
          </ul>    
        </div>

        <div className='room-links'>
          <h3>rooms & suites</h3>
          <Link to={"rooms/standard-room"}>standard room</Link>
          <Link to={"rooms/deluxe"}>deluxe</Link>
          <Link to={"rooms/double-deluxe"}>double deluxe</Link>
          <Link to={"rooms/suite"}>suite</Link>
          <Link to={"rooms/executive-suite"}>executive suite</Link>
        </div>
      
        <div className='footer-item'>
          <h3>Address</h3>
          <ul>
            <li><p>Brand Hotel Dodoma</p></li>
            <li><p>Plot No 52 Mwangaza, Kisasa Hse 300</p></li>
            <li><p>PO BOX 2222-5555 Dodoma, Tanzania</p></li>
            <li>
              <label htmlFor="tel"><MdPhone/></label>
              <a href="tel:+255746780271" id='tel'> +255 746 780 271</a>
            </li>   
            <li>
              <label htmlFor="email"><MdOutlineEmail/></label>
              <a id="email" href="mailto:reservations@brandhotel-dodoma.com" >reservations@brandhotel-dodoma.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-logo'>
        <i>LG</i>
        <h3>brand hotel</h3>
        <div>  
          <a href="http://api.whatsapp.com/send?phone=+254746780271"><MdWhatsapp/></a>
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
          <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
        </div>
      </div>

      <div className='terms-and-conditions'>
        <div>
          <Link to={'terms-and-conditions'} className='link'>terms & conditions</Link> |
          <Link to={'privacy-policy'} className='link'>privacy policy</Link>
        </div>
        <p>All rights reserved brand hotel</p>
        <p><MdCopyright/> copyright 2025 </p>
      </div>
      
    </footer>
  )
}

export default Footer