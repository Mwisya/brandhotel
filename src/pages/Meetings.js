import React from 'react'
import { Helmet } from 'react-helmet'
import { useRoomsContext } from '../contextApi/roomsContext'
import { useReactHelmetContext } from '../contextApi/ReactHelmetContext'
import { Display, Events, Introduction} from '../components'

const Meetings = () => {
  const {meetingsData } = useRoomsContext()
  const {title, displayImage, heading, content, halls, amenities} = meetingsData
  const {meeting} = useReactHelmetContext();
  
 
  return (
    <main>
      <Helmet>
        <title>{meeting.title}</title>
        <meta name={meeting.description} content={meeting.content} />
        <meta  name={meeting.keywords} keywords={meeting.keywords}/>
      </Helmet>
      <Display title={title} image={displayImage}/>
      <Introduction overview={content}/>
      <Events heading={heading} halls={halls} amenities={amenities}/>
    </main>
  )
}

export default Meetings