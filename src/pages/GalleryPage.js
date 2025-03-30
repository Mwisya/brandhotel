import React from 'react'
import { Helmet } from 'react-helmet'
import { useRoomsContext } from '../contextApi/roomsContext'
import { useReactHelmetContext } from '../contextApi/ReactHelmetContext'
import { Display, Gallery } from '../components'
import facility from '../assets/facility.jpg'


const GalleryPage = () => {
  const { galleryData } = useRoomsContext();
  const {gallery } = useReactHelmetContext();   

  return (
    <main>
      <Helmet>
        <title>{gallery.title}</title>
        <meta name={gallery.description} content={gallery.content} />
        <meta  name={gallery.keywordsname} keywords={gallery.keywords}/>
      </Helmet>
      <Display title="gallery" image={facility}/>
      <Gallery gallery={galleryData}/>
    </main>
  )
}

export default GalleryPage