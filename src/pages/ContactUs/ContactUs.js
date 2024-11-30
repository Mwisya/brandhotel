import React from 'react'
import './ContactUs.css'
import { Contact, Display, Location } from '../../components'

const ContactUs = () => {
  const title = 'contact Us'
  return (
    <main>
      <Display title={title}/>
      <Contact/>
      <Location/>
    </main>
  )
}

export default ContactUs