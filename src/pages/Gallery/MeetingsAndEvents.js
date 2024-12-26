import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const MeetingsAndEvents = () => {
  const {meetingsGallery} = useRoomsContext()

  return (
    <section>
      <GalleryLayout gallery = {meetingsGallery}/>
    </section>
  )
}

export default MeetingsAndEvents