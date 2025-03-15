import React, {useState} from 'react'
import './roomLayout.css'
import { MdOutlineEmail, MdWhatsapp,MdClose, MdPhoneAndroid } from 'react-icons/md'
import BookingPopUp from '../../components/bookingPopUp/BookingPopUp'
import { RiBankCardLine } from 'react-icons/ri'

const RoomLayout = ({room}) => {
  const[openModal, setOpenModal]= useState(false)
  const[file, setFile]= useState(null)
  const[openBookingModal, setOpenBookingModal] = useState(false)

  const amenitieslist = room.allAmenities;
  const openBooking  = () => {setOpenBookingModal(true)}
  const closeBooking  = () => {setOpenBookingModal(false)}

  let p = room.price
  const price = new Intl.NumberFormat('en-US').format(p)

  return (
    <main className='room-layout'>
      { openBookingModal && <BookingPopUp onClick={closeBooking} /> }
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
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
              ) }) }
          </ul>
        </div>

        <div className='room-reservation'>
          <h2>booking & reservations</h2>
          <p>Enjoy your stay in style and comfort, feel at home.
          </p>

          <div className='room-contacts'>
            <i> <MdPhoneAndroid/> </i>
            <i>  <MdOutlineEmail/></i>
            <i> <MdWhatsapp/></i>   
          </div>

          <div className='checkin-and-checkout'>
            <div>
              <h4>check in:</h4>
              <span>10:00</span>
            </div>
            |
            <div>
              <h4>check out:</h4>
              <span>2:00</span>
            </div>
          </div>

          <div className='room-price-booking'>
            <div className='room-price'>
              <h4>{room.name}</h4>   
              <p className='price'><RiBankCardLine/> <span>Tsh {price}</span> /night </p> 
            </div>
            <button type="button" onClick={openBooking} className='booking-btn' >Book now</button>
          </div>

        </div>

      </section>
      {/* GALLERY */}
      <section className='room-gallery-container'>
        <h2>Room Gallery</h2>
        <div className='room-gallery'>
          {
            room.images.map((image, index)=>{
              return(
              <div key={index} onClick={()=> setFile(image)}>
                <img src={image} alt="" onClick={()=>{setOpenModal(true)}}  />
              </div>
              )
            })
          }
        </div>      
        {
          openModal && 
        <div className='modal' onClick={()=>{setOpenModal(false)}}>
          <i className='close-modal'  onClick={()=>{setOpenModal(false)}}><MdClose/></i>
          <div className='modal-content'>
            <img src={file}  alt="" /> 
          </div>
        </div>
        }
      </section>
    </main>
  )
}

export default RoomLayout