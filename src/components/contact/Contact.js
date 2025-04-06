import React, {useRef} from 'react'
import './contact.css'
import {MdWhatsapp} from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const Contact = () => {
  const form = useRef();
  // const sendEmail = (e) =>{
  //   e.preventDefault();
  //   emailjs.sendForm('service id', 'template id', form.current, {
  //     publicKey: '',
  //   })
  //   .then(
  //     ()=>{
  //       console.log('success')
  //     },
  //     (error)=>{
  //       console.log('failed...', error.text)
  //     },
  //   );
  // };
  return (
    <section className='contacts'>
      <div className='contacts-wrapper'>
        <div className='contacts-left'>
          <h2>Front desk</h2>
          <div className='contacts-call'>
            <span>Call Us:</span>
            <div>
              <a href="tel:+255773467756">+(255) 773 467 756</a>
              <a href="tel:+255773467756">+(255) 773 467 756</a>
            </div>
          </div>
          <div className='contacts-socialmedia'>
            <a href="http://api.whatsapp.com/send?phone=+254746780271"><MdWhatsapp/></a>
            <a href="http://www.facebook.com/brandhotel"><FaFacebookF/></a>
            <a href="http://instagram.com/brand_hotel_"> <FaInstagram/></a>
            <a href="http://x.com/brand_hotel_"> <RiTwitterXLine/></a>
          </div> 
        </div>
        <form ref={form} className='contacts-right'>
          <div>
          <label htmlFor="">name</label>
          <input type="text" name="user_name" placeholder="Enter name" />
          </div>

          <div>
          <label>email</label>
          <input type="email" name="user_email" placeholder="Enter email" />
          </div>
          <div>
            <textarea name="message" placeholder="Type message..."></textarea>
          </div>
          <input type="submit" value="Send" className='submit-btn' />     
        </form>   
      </div>
    </section>
  )
}

export default Contact