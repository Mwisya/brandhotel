import React from 'react'
import {Experiences, Gallery, NewsLetter, OurServices, Rooms, SlideShow, Welcome } from '../../components'

const Home = () => {
  return (
    <main>
      <SlideShow/>
      <Welcome/>
      <Rooms/>
      <OurServices/>
      <Experiences/>
      <Gallery/>
      <NewsLetter/>
    </main>
  )
}

export default Home