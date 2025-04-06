import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import './gallery.css'

const Gallery = ({gallery}) => {
  const[active, setActive]=React.useState('overview')

  // switch (key) {
  //   case value:
      
  //     break;
  //   case value:
      
  //     break;
  //   case value:
      
  //     break;
  //   case value:
      
  //     break;
  
  //   default:
  //     break;
  // }
 
  return (
    <section className='gallery'>
      <div className='gallery-btns'>
        <button className='gallery-btn' onClick={()=>setActive('overview')}>overview</button>
        <button className='gallery-btn' onClick={()=>setActive('rooms')}>rooms & suites</button>
        <button className='gallery-btn' onClick={()=>setActive('meetings')}>meetings & events</button>
        <button className='gallery-btn' onClick={()=>setActive('restaurant')}>restaurant</button>
      </div>
      {/* <div className='gallery-content'></div> */}
        {active === 'overview' && <GalleryLayout gallery={gallery.overview} index = '0'/> }
        {active === 'rooms' && <GalleryLayout gallery={gallery.rooms} index = '1'/> }
        {active === 'restaurant' && <GalleryLayout gallery={gallery.restaurant}  index = '2' /> }
        {active === 'meetings' && <GalleryLayout gallery={gallery.meetings} index = '3' /> } 
    </section>
  )
}

export default Gallery