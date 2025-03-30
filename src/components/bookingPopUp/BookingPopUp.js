import React from 'react'
import './bookingPopUp.css'
import { MdWhatsapp, MdOutlineEmail, MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const BookingPopUp = ({onClick}) => {
  return (
    <div className='booking-popup'>
      <i onClick={onClick} className='close-popup'><MdClose/></i>
      <div className='booking-popup-wrapper'>
          <h2>contact front desk</h2>
        <div className="popup-contact">
          <div className='popup-contact-call'>
              <a href="tel:+255773467756">+(255) 773 467 756</a>
              <a href="tel:+255773467756">+(255) 773 467 756</a>
          </div>
          <div className='popup-contact-links'>
            <a href="mailto:reservations@brandhotel-dodoma.com" > <MdOutlineEmail/>mail reservations</a>
            <a href="http://wa.me/255750866722"><MdWhatsapp/>whatsApp</a>
          </div>

        </div>
        <div className="popup-address">
          <h3>address</h3>
          <p>Brand Hotel Dodoma</p>
          <p>Plot No 52 Mwangaza, Kisasa Hse 300</p>
          <p>PO BOX 2222-5555 Dodoma, Tanzania</p>
        </div>
        <div className="popup-social-media">
          <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
          <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
          <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
        </div>

      </div>
    </div>
  )
}

export default BookingPopUp