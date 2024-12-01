import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='quick_links'>
          <h4>Quick links</h4>
          <ul className='quick-links'>
              <li>
                <Link to={'/'} className='quick-link'>Home</Link>
              </li>    
              <li>
                <Link to={'accomodation'} className='quick-link'>accomodation</Link>
              </li>
              <li>
                <Link to={'gallery'} className='quick-link'>gallery</Link>
              </li>
              <li>
                <Link to={'about'} className='quick-link'>About</Link>
              </li>
              <li>
                <Link to={'contact'} className='quick-link'>Contact</Link>     
              </li>
          </ul>    
        </div>

        <div className='contacts'>
          <h4>Contact</h4>
          <ul>
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
              <a href="http://wa.me/255773467756" id='whatsapp'>Text us on Whatsapp</a>
            </li>
          </ul>
        </div>

        <div className='socials'>
          <h4>Social media</h4>
          <ul>
            <li>
              <label htmlFor="facebook"><FaFacebookF/></label>
              <a href="http://www.facebook.com/brandhotel" id="facebook">brand hotel</a>
            </li>

            <li>
              <label htmlFor="x"><FaTwitter/></label>
              <a href="http://x.com/brand_hotel_" id="x">Brand_hotel_</a>
            </li>

            <li className='social_li'>
              <label htmlFor="instagram"><FaInstagram/></label>
              <a href="http://instagram.com/brand_hotel_" id="instagram">Brand_hotel_</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer