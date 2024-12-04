import React from 'react'
import './AccomodationPage.css'
import { Accomodation, Display, Introduction } from '../../components'
import { room } from '../../data/data'
const AccomodationPage = () => {
  const title = 'accomodation'
  const overview = {
    heading:'Indulge in pure luxury',
    content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda! Velit quasi, asperiores molestias est a saepe ipsa facilis ratione magni vitae corporis cupiditate alias? In repellendus ea quibusdamvitae corporis cupiditate alias? In repellendus ea quibusdam ut?'
  }
  return (
    <main className='accomodationPage'>
      <Display title={title} image={room.image}/>
      <Introduction overview={overview}/>
      <Accomodation/>
    </main>
  )
}

export default AccomodationPage