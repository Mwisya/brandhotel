import React, {useState} from 'react'
import './roomLayout.css'
import { MdWhatsapp,MdClose, MdOutlineBed, MdOutlineMail, MdPhoneAndroid } from 'react-icons/md'
import BookingPopUp from '../../components/bookingPopUp/BookingPopUp'
import {IoPeopleOutline } from 'react-icons/io5'

const RoomLayout = ({room}) => {
  const[file, setFile]= useState(null)
  const[openModal, setOpenModal]= useState(false)
  const[openBookingPopup, setOpenBookingPopup] = useState(false)

  if (file === 'mp4' || file === 'mp3') {
    
  }
  const open_modal = ()=>{
    if( !openModal){setOpenModal(true)}
    else if ( openModal) {setOpenModal(false)}
  }
  const open_popup = ()=>{
    if( !openBookingPopup){setOpenBookingPopup(true)}
    else if ( openBookingPopup) {setOpenBookingPopup(false)}
  }
  
  const amenitieslist = room.allAmenities;
  let p = room.price
  const price = new Intl.NumberFormat('en-US').format(p)

  return (
    <main className='room-layout'>
      { openBookingPopup && <BookingPopUp onClick={open_popup} /> }
      <section className='room-display'>
        <img src={room.image} alt="" />
        <div className='room-display_amenities'>
          <h1>{room.name}</h1>
          <div className='amenities-sample_wrapper'>
            {
              room.displayAmenities.map((item, index)=>{
                return(
                  <div key={index}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>

                )
              })
            }
          </div>
        </div>
      </section>
      <section className='room-description'>
        <h2>room description</h2>
        <p> {room.desc} </p>
      </section>
      <section className='room-items'>
        <div className='room-amenities'>
          <h2>Amenities</h2>
          <ul className="amenities-wrapper">
            { amenitieslist.map((amenity, index) => {
              return(
                  <li className='amenity' key={index}>
                    <i>{amenity.icon}</i>
                    <span>{amenity.title}</span>
                  </li>
              ) }) }
          </ul>
        </div>

        <div className='room-reservation'>
          <h2>Bookings & reservations</h2>
          <p>Enjoy peaceful stay full of comfort and style in Dodoma
            <div>      
              <a href="tel:+255773467756"><MdPhoneAndroid/></a>
              <a href="mailto:bookings@brandhotel-dodoma.com" className='footer-email'> 
              <MdOutlineMail/></a>
              <a href="http://api.whatsapp.com/send?phone=+254746780271"><MdWhatsapp/></a>
            </div>
          </p>
          <div className='room-price-booking'>
            <div className='room-price'>
              <h3>{room.name}</h3>   
              <div className='price'>
                <div>Tsh {price}</div><span> per night</span> 
              </div> 
              <div className='room-price_capacity'>
                <span><MdOutlineBed/> {room.capacity.bed} King bed </span>    
                <span><IoPeopleOutline/> Upto {room.capacity.guests} guests </span>
              </div>
            </div>
          </div>
          <div className='checkin-and-checkout'>
            <div><span>check in: </span>2:00hrs</div> |
            <div><span>check out: </span>10:00hrs</div>
          </div>
          <button type="button" onClick={open_popup} className='booking-btn' >Book now</button>
        </div>

      </section>
      {/* GALLERY */}
      <section className='room-gallery-container'>
        <h2 className="room-gallery-heading">Room Gallery</h2>
        <div className='room-gallery'>
          { room.media.map((file, index) =>
            <div key={index} onClick={open_modal}>
              {
                file.type === 'image'
                ? 
                <img src={file.url} alt="" onClick={()=>setFile(file)}/>
                :
                <video src={file.url}  muted loop onClick={()=>setFile(file)}/>

              }
            </div>
           )}
        </div>      
        { openModal && 
          <div className='modal'>
            <button type="button" className='close-modal' onClick={()=>{setOpenModal(false)}}><MdClose/></button>
            <div className='modal-content'>
              {file?.type === 'video' ?
                <video src={file.url}  autoPlay muted loop/> :
                <img src={file.url}  alt="" /> 
              }
            </div>
          </div>
        }
      </section>
    </main>
  )
}

export default RoomLayout