import React from 'react'
import GalleryLayout from '../../layouts/GalleryLayout/GalleryLayout'
import './gallery.css'
// import RoomsGallery from './RoomsGallery'
// import MeetingAndEventsGallery from './MeetingAndEventsGallery'
// import RestaurantGallery from './RestaurantGallery'
// import FacilityGallery from './FacilityGallery'

const Gallery = ({gallery}) => {
  const[active, setActive]=React.useState('rooms')

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
      <div className='gallery-navigation'>
        <button className='gallery-btn' onClick={()=>setActive('rooms')}>rooms</button>
        <button className='gallery-btn' onClick={()=>setActive('faciity')}>facility</button>
        <button className='gallery-btn' onClick={()=>setActive('restaurant')}>restaurant</button>
        <button className='gallery-btn' onClick={()=>setActive('meetings')}>meetings & events</button>
      </div>
      {/* <div className='gallery-content'></div> */}
      {active === 'rooms' && <GalleryLayout gallery={gallery.rooms} index = '0' /> }
      {/* {active === 'facility' && <GalleryLayout gallery={gallery} index = '1'  /> }
      {active === 'restaurant' && <GalleryLayout  index = '2'  /> }
      {active === 'meetings' && <GalleryLayout index = '3' /> } */}
    </section>
  )
}

export default Gallery