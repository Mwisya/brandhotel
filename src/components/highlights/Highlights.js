import React from 'react'
import './highlights.css'
import { MdCoffee, MdOutlineLocalLaundryService, MdOutlineLocalParking, MdPool } from 'react-icons/md'
import { FaCloudSun, FaWifi } from 'react-icons/fa'
import { GiWineGlass } from 'react-icons/gi'
import { FaBed } from 'react-icons/fa6'
const Highlights = () => {
    const highlights = [
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
            icon: <MdPool/> ,
            heading: 'Outdoor swimming pool' ,
            content: 'Refresh yourself and enjoy your swim'
        },
        {
            icon: <FaWifi/> ,
            heading: 'high speed Wi-Fi' ,
            content: 'Enjoy high speed connectivity'
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
        {
            icon: <MdOutlineLocalLaundryService/> ,
            heading: 'laundry services',
            content: 'superb laundry services available'
        },
       
    ] 
  return (
    <section className='highlights' >
        <h1 className='highlights-heading'>highlights</h1>
        <div className="highlights-wrapper">
        {
            highlights.map((highlight, index)=>{
                return(
                    <div key={index} className='highlight'>
                        <div className='highlight-content'>
                            <div>
                                <i>{highlight.icon}</i>
                                <h4>{highlight.heading}</h4>
                            </div>
                            <p>{highlight.content}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>

    </section>
  )
}

export default Highlights