import React, {useState} from 'react'
import './roomLayout.css'
import { MdOutlineEmail, MdWhatsapp,MdClose, MdOutlineBed, MdCall } from 'react-icons/md'
import BookingPopUp from '../../components/bookingPopUp/BookingPopUp'
import { RiBankCardLine } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'

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
          <h3>Amenities</h3>
          <ul className="amenities-wrapper">
            { amenitieslist.map((amenity, index) => {
              return(
                  <li className='amenity' key={index}>
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
              ) }) }
          </ul>
        </div>

        <div className='room-reservation'>
          <h3>Bookings & reservations</h3>
          <p>Enjoy your stay in style & comfort in pure luxury.
          </p>

          <div className='room-contacts'>
            <a href="tel:+255773467756"><MdCall/></a>
            <a href="mailto:reservations@brandhotel-dodoma.com" > <MdOutlineEmail/></a>
            <a href="http://wa.me/255750866722"><MdWhatsapp/></a>
          </div>

          <div className='checkin-and-checkout'>
            <div>
              <h4>check in:</h4>
              <span>10:00hrs</span>
            </div>
            |
            <div>
              <h4>check out:</h4>
              <span>2:00hrs</span>
            </div>
          </div>

          <div className='room-price-booking'>
            <div className='room-price'>
              <h4>{room.name}</h4>   
              <div>
                <span> <IoPeopleOutline/> Upto {room.capacity.guests} Guests </span>
                <span> <MdOutlineBed/> {room.capacity.bed} King Bed </span>    
              </div>
              <p className='price'><RiBankCardLine/> <span>Tsh {price}</span>/night </p> 
            </div>
            <button type="button" onClick={open_popup} className='booking-btn' >Book now</button>
          </div>

        </div>

      </section>
      {/* GALLERY */}
      <section className='room-gallery-container'>
        <h2 className="room-gallery-heading">Room Gallery</h2>
        <div className='room-gallery'>
         { room.video && 
            <div onClick={open_modal}>
              <video src={room.video} autoPlay muted loop onClick={()=>setFile(room.video)}/>
            </div>
          }
          { room.images.map((image, index)=>
            <div key={index} onClick={open_modal}>
              <img src={image} alt="" onClick={()=>setFile(image)}/>,
            </div>
           )}
        </div>      
        { openModal && 
          <div className='modal' onClick={()=>setOpenModal(false)}>
            <i className='close-modal'  onClick={()=>{setOpenModal(false)}}><MdClose/></i>
            <div className='modal-content'>
              {file ?
               <img src={file}  alt="" /> :
                <video src={file}  autoPlay muted loop/>
              }
            </div>
          </div>
        }
      </section>
    </main>
  )
}

export default RoomLayout