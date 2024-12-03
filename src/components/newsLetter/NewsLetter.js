import React,{useState} from 'react'
import './newsLetter.css'
import { MdNotifications } from 'react-icons/md';

const NewsLetter = () => {
  const [email, setEmail]= useState('');
  const handleChange = (e)=> {
      setEmail(e.target.value)
  };
  const handleSubmit = async (e)=> {
      e.preventDefault()
      setEmail('')
  };
  return ( 
    <section className='newsletter'> 
      <div className='newsletter-wrapper'>
        <div className='logo'>
          <i></i>
          <h3>Become Brand's hotel loyal!</h3>
          <h2>sing up for our newsletter</h2>
        </div>
        <form onSubmit={handleSubmit} method="post">
        <p>Hear about our latest Offers and upcoming events by signing up to our mailing list.</p>
          <input type="email" value={email} onChange={handleChange} name="email" id="email" placeholder='Enter email . . .' />
          <button type="submit"> <MdNotifications/> Subscribe</button>
        </form>
        </div>
    </section>
  )
}

export default NewsLetter