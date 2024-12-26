import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Facility = () => {
  const {facilityGallery} = useRoomsContext()
  return (
    <div>
      <GalleryLayout gallery = {facilityGallery}/>
    </div>
  )
}

export default Facility