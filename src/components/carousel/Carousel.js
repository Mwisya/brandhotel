import React, {useState, useEffect} from 'react'
import './carousel.css'
import {slides} from '../../data/data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
 

const Carousel = ({data}) => {
  const [curr, setCurr] = useState(0)
  const slideLength = data.length;
  const autoslide = true;
      
  const next = () => {
    setCurr((curr) => curr === slideLength - 1 ? 0 : curr + 1)
  }
  const prev = () => {
    setCurr((curr) => curr === 0 ? slideLength - 1 : curr - 1)
  }
 
  useEffect( () => {
    if( !autoslide ) return;
    const slideInterval = setInterval(next, 7000)
    return () =>  clearInterval(slideInterval)
  }, [])


  return (
    <section className='carousel-container'>
      <FaChevronLeft className='arrow prev' onClick={prev}/>
      <FaChevronRight className='arrow next' onClick={next}/>
        
      { 
        data.map((img, index) => {
          return(
              <div key={index} className='carousel' style={{ transform: `translateX(-${curr * 100}%)` }}>

                <img src={img.image} alt="" />
                <div className='carousel-content'>
                  <h1>{img.title}</h1>
                </div>
              </div>
        )})
      }

      <div className='carousel-btns'>
        {
          data.map((_, index)=>{
            return(
              <div 
               onClick={(index)=>{ setCurr( index) }}
               key={index}
               className={` ${curr === index ? "active" : "carousel-btn"} `}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Carousel