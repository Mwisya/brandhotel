import React, {useState, useEffect, useRef} from 'react'
import './hotelServices.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { MdLocalHotel, MdOutlineRestaurant } from 'react-icons/md'
import { BsProjector } from 'react-icons/bs'

const HotelServices = ({data}) => {
  const [curr, setCurr] = useState(0)
  const slideLength = data.length;
  // Control transition for resets
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  
    // Extended slides: [last, 1, 2, 3, first]
    const extendedSlides = [
      data[data.length - 1], // Clone of last slide
      ...data, // Original slides
      data[0], // Clone of first slide
    ];
    // Auto-slide effect
    useEffect(() => {
      const interval = setInterval(() => {
        setCurr((prevIndex) => prevIndex + 1);
        setIsTransitioning(true);
    }, 7000); // Change slide every 7 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
    // Handle transition end to reset index for infinite loop
    useEffect(() => {
      if (curr === extendedSlides.length - 1) {
        // Reached cloned first slide, reset to first real slide
        setTimeout(() => {
          setIsTransitioning(false);
          setCurr(1);
        }, 7000); // Match transition duration
      } else if (curr === 0) {
        // Reached cloned last slide, reset to last real slide
        setTimeout(() => {
          setIsTransitioning(false);
          setCurr(data.length);
        }, 7000); // Match transition duration
      }
    }, [curr]);
      
  const next = () => {
  setCurr((curr) => curr === slideLength - 1 ? 0 : curr + 1)
  }
  const prev = () => {
  setCurr((curr) => curr === 0 ? slideLength - 1 : curr - 1)
  }

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

          { extendedSlides.map((img, index) => { return(
              <div key={index} 
              ref={sliderRef} 
              className='hotel-carousel' 
              style={{ 
                transform: `translateX(-${curr * 100}%)`,
                transition: isTransitioning ? 'transform 1.5s ease-in-out' : 'none'
               }}>
                <img key={index} src={img} alt={`Slide ${index}`} />   
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