import React from 'react'
import './contact.css'
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebookF, FaInstagram} from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

const Contact = () => {
  // const [inputs, setInputs] = useState({
  //   email:'',
  //   subject:''
  // })

  // const handleChange = (e)=>{
  //   var {name, value} = e.target;
  //   setInputs({...inputs , [name]:value})
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setInputs({
  //     email:'',
  //     subject:'',
  // })

  // }; 
  return (
    <section className='contact'>
      <div className='contactUs-wrapper'>
        <div className='contactUs-address'>
          <i className='contactUs-logo'>logo</i>
          <p> Kisasa, Dodoma, Tanzania</p>
          <h2>Bookings & Reservations</h2>
        </div>

        <div className='contactUs-icons'>
            <button type="button" className='call-btn'>
              <MdPhone/>
              <a href="tel:+255746780271" id='tel'>call</a>
            </button>
            <button type="button" className='email-btn'>
              <MdOutlineEmail/>
              <a href="mailto:brandhotel4@gmail.com" id='email'>email</a>
            </button>
            <button type="button" className='whatsapp-btn'>
              <MdWhatsapp/>
              <a href="http://api.whatsapp.com/send?phone=+254746780271">chat</a>
              
            </button>          
        </div>

        <div className="contactUs-reception">
          
          <h2>Reception</h2>
          <a href="tel:+255773467756" id='call'>+255 773 467 756</a>
        </div>

        <div className='contactUs-details'>
            <label htmlFor="whatsapp">
              <span>WhatsApp number:</span>
              <a href="http://api.whatsapp.com/send?phone=+254746780271" id="whatsapp"> +255 746 780 271</a>
            </label>
            <label htmlFor="email">
              <a href="mailto:reservations@brandhotel-dodoma.com" id='email'>reservations@brandhotel-dodoma.com</a>
            </label>
        </div>

        <div className='contactUs-socialmedia'>
          <i className='contactUs-socialmedia-icon'> <FaFacebookF/></i>
          <i className='contactUs-socialmedia-icon'> <FaInstagram/> </i> 
          <i className='contactUs-socialmedia-icon'> <RiTwitterXLine/> </i>   
        </div>
        
      </div>
    </section>
  )
}

export default Contact