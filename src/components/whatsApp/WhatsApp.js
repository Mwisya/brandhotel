import './whatsApp.css'
import React from 'react'
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'

const WhatsApp = () => {
  return (
    <div className='cta-btn-fixed'>
      <label htmlFor="whatsapp"><MdWhatsapp/>
        <a id='whatsapp' href="http://api.whatsapp.com/send?phone=+254746780271"> whatsApp</a>
      </label>
    
      <label htmlFor="tel">
        <MdPhone/>
        <a href="tel:+255746780271" id='tel'> call</a>
      </label>
      
      <label htmlFor="email">
        <MdOutlineEmail/>
        <a id="email" href="mailto:reservations@brandhotel-dodoma.com" >email</a>
      </label>   
    </div>
  )
}

export default WhatsApp