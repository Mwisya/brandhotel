import React, {useState, useEffect} from 'react'
import './hotelServices.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { MdLocalHotel, MdOutlineRestaurant } from 'react-icons/md'
import { BsProjector } from 'react-icons/bs'

const HotelServices = ({data}) => {
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
    <section className='hotel-services-container'>
      <div className='hotel-services-wrapper'>
        <div className='hotel-services-content'>
          <h2>Enjoy comfortable stay & memorable experience</h2>  
          <div className='hotel-services-icons'>
            <div>
              <MdLocalHotel/>
              <span>accomodation</span>
            </div>
            <div>
              <MdOutlineRestaurant/>
              <span>restaurant & lounge</span>
            </div>
            <div>
              <BsProjector/>
              <span>meetings & events</span>
            </div>
          </div>
        </div>
        <div className='hotel-services'>
          <FaChevronLeft className='arrow prev' onClick={prev}/>
          <FaChevronRight className='arrow next' onClick={next}/>

          { data.map((img, index) => { return(
              <div key={index} className='hotel-carousel' style={{ transform: `translateX(-${curr * 100}%)` }}>
                <img key={index} src={img} alt="" />   
              </div>
            )})
          }

          <div className='hotel-carousel-btns'>
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
        </div>
      </div>
    </section>
  )
}

export default HotelServices