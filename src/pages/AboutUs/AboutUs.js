import React from 'react'
import {About, Display, NewsLetter } from '../../components'
import { fac } from '../../data/data'


const AboutUs = () => {
  const title = 'About Us'
  return (
    <main>
      <Display title={title} image={fac.image}/>
      <About/>
      <NewsLetter/>
    </main>
  )
}

export default AboutUs