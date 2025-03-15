import React,{useState} from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  const [email, setEmail]= useState('');
  const handleChange = (e)=> { setEmail(e.target.value) };

  const handleSubmit = async (e)=> {
      e.preventDefault()
      setEmail('')
  };
  return ( 
    <section className='newsletter'> 
      <p>Sign up for Offers, News & Upcoming events</p>
      <form onSubmit={handleSubmit} className='form'>
        <input type="email" value={email} onChange={handleChange} name="email" id="email" placeholder='Enter email . . .' />
        <button type="submit"> Subscribe</button>
      </form>
    </section>
  )
}

export default NewsLetter