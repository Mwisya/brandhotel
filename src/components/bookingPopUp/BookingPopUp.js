import React from 'react'
import './bookingPopUp.css'
import { MdWhatsapp, MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const BookingPopUp = ({onClick}) => {
  return (
    <div className='booking-popup'>
      <i onClick={onClick} className='close-popup'><MdClose/></i>
      <div className='booking-popup-wrapper'>

        <div className='popup-logo'>
          <i>LG</i>
          <h3>Brand Hotel</h3>
        </div>
        <div className="popup-contact">
          <h3>contact reception</h3>
          <div>
          <a href="tel:+255746780271"> +255 746 780 271</a>
          </div>
          <a href="mailto:reservations@brandhotel-dodoma.com" >reservations@brandhotel-dodoma.com</a>
          <a href="http://wa.me/255750866722"> <MdWhatsapp/> Text us on WhatsApp</a>
        </div>

        <div className="popup-address">
          <h3>address</h3>
          <p>Brand Hotel Dodoma, Kisasa Road</p>
          <p>PO BOX 2222-5555 Dodoma, Tanzania</p>
        </div>

        <div className="popup-social-media">
          <h4>Follow us:</h4>
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
          <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
        </div>

      </div>
    </div>
  )
}

export default BookingPopUp