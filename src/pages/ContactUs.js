import React from 'react'
import { Helmet } from 'react-helmet'
import { Contact, Display, Map } from '../components'
import reception from '../assets/roomTypes/reception (1).jpg'
import { useReactHelmetContext } from '../contextApi/ReactHelmetContext'

const ContactUs = () => {
  const {contact } = useReactHelmetContext();

  return (
    <main>
      <Helmet>
        <title>{contact.title}</title>
        <meta name={contact.description} content={contact.content} />
        <meta  name={contact.keywords} keywords={contact.keywords}/>
      </Helmet>
      <Display title='Contact Us' image={reception}/>
      <Contact/>
      <Map/>
    </main>
  )
}

export default ContactUs