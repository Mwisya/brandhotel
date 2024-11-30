import React from 'react'
import {Gallery, Location, NewsLetter, OurServices, Rooms, SlideShow, Welcome } from '../../components'

const Home = () => {
  return (
    <main>
      <SlideShow/>
      <Welcome/>
      <Rooms/>
      <OurServices/>
      <Gallery/>
      <NewsLetter/>
    </main>
  )
}

export default Home