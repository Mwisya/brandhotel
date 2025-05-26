import React, {useState} from 'react'
import './contact.css'
import {MdWhatsapp} from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'

const Contact = () => {
  // const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  const sendEmail = (e) =>{
    e.preventDefault();
    setEmail('')
    setName('')
    setMessage('')
    setText('Message sent successfully.')
    // emailjs.sendForm('service id', 'template id', form.current, {
    //   publicKey: '',
    // })
    // .then(
    //   ()=>{
    //     console.log('success')
    //   },
    //   (error)=>{
    //     console.log('failed...', error.text)
    //   },
    // );
  };
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
          </div> 
        </div>
        <form onSubmit={sendEmail} className='contacts-right'>
          <div>
          <label htmlFor="">name</label>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
          </div>

          <div>
          <label>email</label>
          <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter email" />
          </div>
          <div>
            <textarea name="message" value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder="Type message..."></textarea>
          </div>
          {text && <p className='message'>{text}</p>}
          <input type="submit" value="Send" className='submit-btn' />     
        </form>   
      </div>
    </section>
  )
}

export default Contact