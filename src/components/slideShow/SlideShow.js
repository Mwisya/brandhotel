import React,{useState, useEffect} from 'react'
import './slideShow.css'
import {slides} from '../../data/data'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesLength = slides.length

  const autoScroll = true;
  let slideInterval;
  
  const nextSlide = () => {
    setCurrentSlide( currentSlide === slidesLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide( currentSlide === 0 ? slidesLength - 1 : currentSlide - 1)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, 7000)
  }
   
  useEffect(() => {
    if (autoScroll) { auto() }
    return () => {
      clearInterval(slideInterval)
    }
  }, [currentSlide])
 
  return (
    <div className='slides'>  
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
        {slides.map(
            (slide, index) => {
              return (
                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                  {index === currentSlide && (
                    <>
                      <img src={slide.image} alt="" />
                      <h1 className='slide-heading'>{slide.title}</h1>
                    </>
                  )}
                </div>
              )
         })}
    </div>
  )
}

export default SlideShow