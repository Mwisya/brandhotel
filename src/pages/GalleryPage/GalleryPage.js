import React from 'react'
import { Display, Gallery } from '../../components'
import facility from '../../assets/facility.jpg'
import { useRoomsContext } from '../../contextApi/roomsContext'


const GalleryPage = () => {
   const { galleryData } = useRoomsContext()
  const title = "Gallery"

  
  return (
    <main>
      <Display title={title} image={facility}/>
      <Gallery gallery={galleryData}/>
    </main>
  )
}

export default GalleryPage