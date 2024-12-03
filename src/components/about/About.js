import React from 'react'
import './about.css'
import Experiences from '../experiences/Experiences'

const About = () => {
  return (
    <div className='about'>
      <p className='about-info'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore velit architecto optio aliquam deserunt voluptatem dolor ipsam provident aut quos. Similique sed minima delectus corporis odio suscipit harum unde laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus nisi voluptatem illum excepturi deserunt voluptate tempora molestias nulla doloremque, odio rem nesciunt fugit mollitia suscipit earum natus ipsum, consequatur quibusdam! Iste quis corrupti, magnam voluptatum, in officia sed quibusdam eius illum impedit facilis incidunt iusto nemo nam eligendi quisquam?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus dolor explicabo odio molestias eos dolore deserunt qui magnam repellendus suscipit, quo, distinctio officia consectetur libero. Voluptatum quos dolorum cum. voluptatibus dolor explicabo odio molestias eos dolore deserunt qui magnam repellendus suscipit, quo, distinctio officia consectetur libero. Voluptatum quos dolorum cum
      </p>
      <Experiences/>
      <div className='contact'>
        <h2>Contact Us</h2>
        <p>Located in Kisasa, Dodoma</p>
        <a href="mailto:brandhotel4@gmail.com">Brandhotel@gmail.com</a>
        <a href="tel:+255773467756">+255-773-467-756</a>
        <div>Chat on WhatsApp <a href="http://wa.me/255773467756">+255-773-467-756</a>
        
        </div>
      </div>
    </div>
  )
}

export default About