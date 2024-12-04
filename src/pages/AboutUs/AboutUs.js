import React from 'react'
import {About, Display, Experiences, NewsLetter } from '../../components'
import { fac } from '../../data/data'


const AboutUs = () => {
  const title = 'About'
  return (
    <main>
      <Display title={title} image={fac.image}/>
      <About/>
      <Experiences/>
      <NewsLetter/>
    </main>
  )
}

export default AboutUs