import React from 'react'
import './Meetings.css'
import { Display, Events} from '../../components'
import { conferenceroom } from '../../data/data'

const Meetings = () => {
  const title = 'meetings & events'
  
  
  return (
    <main className='meetings'>
        <Display title={title} image={conferenceroom.image}/>
        <Events/>
    </main>
  )
}

export default Meetings