import React from 'react'
import {About, Display, Map } from '../../components'
import facility3 from '../../assets/gallery/facility3.jpg'


const AboutUs = () => {
  const title = 'About us'
  return (
    <main>
      <Display title={title} image={facility3}/>
      <About/>
      <Map/>
    </main>
  )
}

export default AboutUs