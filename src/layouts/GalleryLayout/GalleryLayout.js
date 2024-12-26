import React, {useState} from 'react'
import './galleryLayout.css'

const GalleryLayout = ({gallery}) => {
  const [currentImage, setCurrentImage] = useState(0)
  
  return (
    <main className='gallery-container'>
    <div className='gallery-content'>
      <div className='image-preview'>
        <img src={gallery[currentImage]} alt="" /> 
      </div>

      <div className='images-items'>
      
        <div className='image-item'>
          <img src={gallery[0]} alt="" onClick={(e)=> setCurrentImage(0)}  />   
        </div>
        <div className='image-item'>
          <img src={gallery[1]} alt="" onClick={(e)=> setCurrentImage(1)} />   
        </div>
        <div className='image-item'>
          <img src={gallery[2]} alt="" onClick={(e)=> setCurrentImage(2)}  />   
        </div>
        <div className='image-item'>
          <img src={gallery[3]} alt="" onClick={(e)=> setCurrentImage(3)} />   
        </div>
        <div className='image-item'>
          <img src={gallery[4]} alt="" onClick={(e)=> setCurrentImage(4)}  />   
        </div>

      </div>

    </div>
    </main>
  )
}

export default GalleryLayout