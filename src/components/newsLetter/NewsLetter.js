import React,{useState} from 'react'
import './newsLetter.css'

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
          <h2>Brand Hotel</h2>
        </div>
        <p>Subscribe to get updates not limited to Offers and Upcoming events</p>
        <form onSubmit={handleSubmit} method="post">
          <input type="email" value={email} onChange={handleChange} name="email" id="email" placeholder='Type email' />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter