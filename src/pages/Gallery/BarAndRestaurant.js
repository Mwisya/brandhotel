import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const BarAndRestaurant = () => {
  const {restaurantGallery} = useRoomsContext()
  return (
    <section>
      <GalleryLayout gallery = {restaurantGallery}/>
    </section>
  )
}

export default BarAndRestaurant