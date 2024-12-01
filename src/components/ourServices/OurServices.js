import React, {useState} from 'react'
import './ourServices.css'
import { services } from '../../data/data'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesLength = services.length

  const nextSlide = () => {
    setCurrentSlide( currentSlide === slidesLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide( currentSlide === 0 ? slidesLength - 1 : currentSlide - 1)
  }

  return (
    <section className='services'>
      <h1>Our Services</h1>
      <div className='figure-container'>
      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
        <figure>

          {services.map((service, index)=>{
              return( 
                <div key={index}>
                  <img src={service.image} alt="" />
                  <div className='service-info'>
                    <h2>{service.title}</h2>
                    {/* <p>{service.content}</p> */}
                  </div>
                </div>
            )})
          }
        </figure>
      </div>
    </section>
  )
}

export default OurServices