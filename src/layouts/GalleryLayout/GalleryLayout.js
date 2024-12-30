import React, {useState} from 'react'
import './galleryLayout.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


const GalleryLayout = ({gallery}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const slidesLength = gallery.length
  const nextSlide = () => {
    setCurrentImage( currentImage === slidesLength - 1 ? 0 : currentImage + 1)
  }
  const prevSlide = () => {
    setCurrentImage( currentImage === 0 ? slidesLength - 1 : currentImage - 1)
  }
  
  return (
    <section className='gallery-container'>
      <div className='gallery-content'>
        <div className='image-preview'>
          <img src={gallery[currentImage]} alt="" /> 
          <BsArrowLeft className='arrow prev' onClick={prevSlide}/>
          <BsArrowRight className='arrow next' onClick={nextSlide}/>
        </div>

        <div className='images-items'>
        
          <div className='image-item'>
            <img src={gallery[0]} alt="" onClick={(e)=> setCurrentImage(0)}  />   
          </div>
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
    </section>
  )
}

export default GalleryLayout