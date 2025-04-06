import './whatsApp.css'
import React from 'react'

const WhatsApp = () => {
  return (
    <div className='cta-btn-fixed'>
      <a id='whatsapp' href="http://api.whatsapp.com/send?phone=+255746780271">whatsApp</a>
       <a href="tel:+255746780271" id='tel'>call</a>
      <a id="email" href="mailto:reservations@brandhotel-dodoma.com" >mail us</a>
    </div>
  )
}

export default WhatsApp