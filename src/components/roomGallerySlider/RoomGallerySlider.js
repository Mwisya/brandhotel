import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './roomGallerySlider.css'

const RoomGallerySlider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const slidesLength = slides.length
   
  // const nextSlide = () => {
  //   setCurrentSlide( currentSlide === slidesLength - 1 ? 0 : currentSlide + 1)
  // }
  // const prevSlide = () => {
  //   setCurrentSlide( currentSlide === 0 ? slidesLength - 1 : currentSlide - 1)
  // }

  return (
    <section className='room-gallery-container'>
       <div className='room-gallery'>
          <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
          <BsArrowLeft className='arrow prev'/>
          <BsArrowRight className='arrow next'/>
       </div>
    </section>
  )
}

export default RoomGallerySlider