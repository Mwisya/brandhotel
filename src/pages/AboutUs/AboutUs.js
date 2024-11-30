import React from 'react'
import {About, Display } from '../../components'
import { fac } from '../../data/data'


const AboutUs = () => {
  const title = 'About Us'
  return (
    <main>
      <Display title={title} image={fac.image}/>
      <About/>
    </main>
  )
}

export default AboutUs