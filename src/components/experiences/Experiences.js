import React from 'react'
import './experiences.css'
import { MdCoffee, MdPool } from 'react-icons/md'
import { FaCloudSun, FaWifi } from 'react-icons/fa'

const Experiences = () => {
  return (
    <section className='experiences'>
      <h1>Our exclusive Experiences</h1> 
      <div className='experiences-wrapper'>
        <div className='experience'>
          <MdCoffee/>
          <h2>free breakfast</h2>
          <p>All our guests. Enjoy your breakfast at our Restaurant.
          </p>
        </div>
        <div className='experience'>
          <MdPool/>
          <h2>Swimming pool</h2>
          <p>Refresh yourself and mind in our outdoor swimming pool. Nothing beats a good Swim, Why not do it like the Dolphines. 
          </p>
        </div>
        <div className='experience'>
          <FaWifi/>
          <h2>High speed Wi-fi</h2>
          <p>
            Enjoy High speed internet connectivity from any place within the hotel. Surf the internet with no Network glitches.
          </p>
        </div>
        <div className='experience'>
          <FaCloudSun/>
          <h2>Garden</h2>
          <p>
            Enjoy the panorama of the surroundings. With amazing views of the Sunrise not forgetting Enjoying the Sundowner with your family, friends or loved Ones in the garden.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiences