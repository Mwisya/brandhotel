import React from 'react'
import './Meetings.css'
import { Display, Events, Introduction} from '../../components'
import { conferenceroom } from '../../data/data'

const Meetings = () => {
  const title = 'meetings'
  const overview = {
    heading:'Do it in style and comfort',
    content:'   Plan your next Conference, Meeting, Graduation ceremonies, Party or family Get together at our facility. We are equiped to make sure all your need and wants are all met to make any activity a success. Our facility is capabile of catering to large group be it a conference or meeting. We delivery unique curlinary experience to our guest not forgetting affordable rooms for  your desired accomadation from Standard rooms to Executive Suite rooms'

  }
  
  
  return (
    <main className='meetings'>
        <Display title={title} image={conferenceroom.image}/>
        <Introduction overview={overview}/>
        <Events/>
    </main>
  )
}

export default Meetings