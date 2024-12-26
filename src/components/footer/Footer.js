import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-item'>
          <h3>Quick links</h3>
          <ul className='footer-links'>
              <li>
                <Link className='quick-link' to={'/'}>Home</Link>
              </li>    
              <li>
                <Link  className='quick-link' to={'accomodation'}>accomodation</Link>
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
        
        <div className='footer-logo'>
          <i>logo</i>
          <h2>brand hotel</h2>
          <div>  
            <a href="http://www.facebook.com/brandhotel" id="facebook"><FaFacebookF/></a>
            <a href="http://instagram.com/brand_hotel_" id="instagram"> <FaInstagram/></a>
            <a href="http://x.com/brand_hotel_" id="x"> <FaTwitter/></a>
          </div>
        </div>

        <div className='footer-item'>
          <h3>Addresse</h3>
          <ul>
            <li><p>Brand Hotel Dodoma, Tanzania</p> </li>
            <li><p>Kisasa, Kisasa Road</p> </li>
            <li>
              <label htmlFor="tel"><MdPhone/></label>
              <a href="tel:+255773467756" id='tel'> +255-773-467-756</a>
            </li>   
            <li>
              <label htmlFor="tel"><MdPhone/></label>
              <a href="tel:+255750866722" id='tel'> +255-750-866-722</a>
            </li>  
            <li>
              <label htmlFor="email"><MdOutlineEmail/></label>
              <a href="mailto:brandhotel4@gmail.com" id='email'>brandhotel4@gmail.com</a>
            </li>
            <li>
              <label htmlFor="whatsapp"><MdWhatsapp/></label>
              <a href="http://wa.me/255750866722" id='whatsapp'>Text us on Whatsapp</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer