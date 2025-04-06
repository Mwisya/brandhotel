import React from 'react'
import './bookingPopUp.css'
import logo from '../../logo.png'
import { MdWhatsapp, MdOutlineEmail, MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const BookingPopUp = ({onClick}) => {
  return (
    <div className='booking-popup'>
      <i onClick={onClick} className='close-popup'><MdClose/></i>
      <div className='booking-popup-wrapper'>
        <div className='booking-popup_logo'>
          <img src={logo} alt=''/>
          <h2>Brand Hotel</h2>
        </div>
        <div className="popup-item">
          <h3 className='popup-item_heading'>Contact front desk</h3>
          <div className='popup-item_call'>
            <a href="tel:+255773467756">+(255) 773 467 756</a>
            <a href="tel:+255773467756">+(255) 773 467 756</a>
          </div>
          <div className='popup-item_links'>
            <a href="mailto:reservations@brandhotel-dodoma.com" > <MdOutlineEmail/>mail reservations</a>
            <a href="http://wa.me/255750866722"><MdWhatsapp/>whatsApp</a>
          </div>
        </div>
        <div className="popup-item">
          <h3 className='popup-item_heading'>Address</h3>
          <div className='popup-item_address'>
            <span>Brand Hotel Dodoma</span>
            <span>Plot No 52 Mwangaza, Kisasa Hse 300</span>
            <span>PO BOX 2222-5555 Dodoma, Tanzania</span>
          </div>
        </div>
        <div className="popup-item_socials">
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
          <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
        </div>

      </div>
    </div>
  )
}

export default BookingPopUp