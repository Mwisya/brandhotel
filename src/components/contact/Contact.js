import React from 'react'
import './contact.css'
import { MdCall, MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  // const [inputs, setInputs] = useState({
  //   email:'',
  //   subject:''
  // })

  // const handleChange = (e)=>{
  //   var {name, value} = e.target;
  //   setInputs({...inputs , [name]:value})
  // }

  // const handleSubmit = async (e)=> {
  //   e.preventDefault()
  //   setInputs({
  //     email:'',
  //     subject:'',
  // })

  // }; 
  return (
    <section className='contact'>
      <div className='contactUs'>
            <div className='contactUs-logo'>logo</div>
            <h2>Bookings & Reservations</h2>
            <label htmlFor="call">
              <i><MdCall/></i>
              <a href="tel:+255773467756" id='call'>+255-773-467-756</a>
            </label>
            <label htmlFor="call">
              <i><MdCall/></i>
              <a href="tel:+255750866722" id='call'>+255-750-866-722</a>
            </label>
            <label htmlFor="email">
              <i><MdOutlineEmail/></i>
              <a href="mailto:brandhotel4" id='email'>Brandhotel4@gmail.com</a>
            </label>
            <h3>central reservations</h3>
            <label htmlFor="email">
              <i><MdOutlineEmail/></i>
              <a href="mailto:brandhotel4" id='email'>Reservations@brandhotel.co.tz</a>
            </label>
        </div>
    </section>
  )
}

export default Contact