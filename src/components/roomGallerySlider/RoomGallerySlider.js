import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './roomGallerySlider.css'

const RoomGallerySlider = () => {
  return (
    <section className='room-gallery-container'>
       <div className='room-gallery'>
        <div>
            <img src="" alt="" />
            <BsArrowLeft className='arrow, prev'/>
            <BsArrowRight className='arrow next'/>
        </div>
       </div>
    </section>
  )
}

export default RoomGallerySlider