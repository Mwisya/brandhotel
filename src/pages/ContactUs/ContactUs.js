import React from 'react'
import './ContactUs.css'
import { Contact, Display, Map } from '../../components'
import reception from '../../assets/roomTypes/reception (1).jpg'

const ContactUs = () => {
  const title = 'contact Us'
  return (
    <main>
      <Display title={title} image={reception}/>
      <Contact/>
      <Map/>
    </main>
  )
}

export default ContactUs