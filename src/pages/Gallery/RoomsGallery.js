import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const RoomsGallery = () => {
  const {roomsGallery} = useRoomsContext()
  return (
    <section>
      <GalleryLayout gallery = {roomsGallery}/>
    </section>
  )
}

export default RoomsGallery