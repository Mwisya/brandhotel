import React from 'react'
import './AccomodationPage.css'
import { Accomodation, Display } from '../../components'
import { room } from '../../data/data'
const AccomodationPage = () => {
  const title = "accomodation"
  return (
    <main className='accomodationPage'>
      <Display title={title} image={room.image}/>
      
      <Accomodation/>
    </main>
  )
}

export default AccomodationPage