import React from 'react'
import './highlights.css'
import { MdCoffee, MdOutlineLocalLaundryService, MdOutlineLocalParking, MdPool } from 'react-icons/md'
import { FaCalendarCheck, FaCloudSun, FaRegClock, FaWifi } from 'react-icons/fa'
import { GiWineGlass } from 'react-icons/gi'
import { FaBed } from 'react-icons/fa6'
const Highlights = () => {
    const highlights = [
        {
            icon: <FaRegClock/>,
            heading: 'support & assistance',
            content: '24-hours manager on duty'
        },
        {
            icon: <FaBed/> ,
            heading: 'accomodation' ,
            content: 'rooms & suites available'
        },
        {
            icon: <GiWineGlass/> ,
            heading: 'lounge & restaurant' ,
            content: 'Dinning and lounge services'
        },
        {
            icon: <MdCoffee/> ,
            heading: 'complimentary breakfast' ,
            content: 'Enjoy free breakfast at our restaurant'
        },
        {
            icon: <MdOutlineLocalLaundryService/> ,
            heading: 'laundry services',
            content: 'laundry & dry cleaning services available'
        },
        {
            icon: <FaCalendarCheck/> ,
            heading: 'room services' ,
            content: 'Daily housekeeping services'
        },
        {
            icon: <MdPool/> ,
            heading: 'swimming pool' ,
            content: 'Relax and refresh yourself'
        },
        {
            icon: <FaWifi/> ,
            heading: 'Wi-Fi access' ,
            content: 'Available anywhere in the hotel'
        },
        {
            icon: <MdOutlineLocalParking/> ,
            heading: 'Ample parking space' ,
            content: 'Spacious parking is available'
        },
        {
            icon: <FaCloudSun/> ,
            heading: 'green garden' ,
            content: 'Relax your stay in the garden'
        },
      
       
    ] 
  return (
    <section className='highlights' >
        <h1 className='highlights-heading'>facility & services</h1>
        <div className="highlights-wrapper">
        { highlights.map((highlight, index)=>{
            return(
                <div key={index} className='highlight'>
                    <i>{highlight.icon}</i>
                    <div>
                        <span>{highlight.heading}</span>
                        <p>{highlight.content}</p>
                    </div>
                </div>
            ) })  }
        </div>
    </section>
  )
}

export default Highlights