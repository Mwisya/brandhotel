import React from 'react'
import './Meetings.css'
import { Display, Events, Introduction} from '../../components'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Meetings = () => {
  const {meetingsData } = useRoomsContext()
  const {title, displayImage, heading, content, halls, amenities} = meetingsData
 
  return (
    <main className='meetings'>
      <Display title={title} image={displayImage}/>
      <Introduction overview={content}/>
      <Events heading={heading} halls={halls} amenities={amenities}/>
    </main>
  )
}

export default Meetings