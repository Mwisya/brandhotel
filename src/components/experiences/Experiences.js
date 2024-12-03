import React from 'react'
import './experiences.css'
import { MdCoffee, MdPool } from 'react-icons/md'
import { FaCloudSun, FaWifi } from 'react-icons/fa'

const Experiences = () => {
  return (
    <section className='experiences'>
      <div className='experiences-wrapper'>
        <h1>Our exclusive Experiences</h1> 
        <div className='experience'>
          <MdCoffee/>
          <h2>free breakfast</h2>
          <p> We care about our visitors. Enjoy free breakfast at our Restaurant.
          </p>
        </div>
        <div className='experience'>
          <MdPool/>
          <h2>Swimming pool</h2>
          <p>Refresh your body and mind in our outdoor swimming pool.
           Nothing beats a good Swim, Why not do it like the Dolphines. 
          </p>
        </div>
        <div className='experience'>
          <FaWifi/>
          <h2>High speed Wi-fi</h2>
          <p>
            Enjoy High speed internet connection from any place within the hotel. Surf the internet with no Network glitches.
          </p>
        </div>
        <div className='experience'>
          <FaCloudSun/>
          <h2>Great views</h2>
          <p>
           Through our large windows, Enjoy the panorama of the surroundings. With amazing views of the Sunrise not forgetting Enjoying the Sundowner with your family, friends or loved Ones.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiences