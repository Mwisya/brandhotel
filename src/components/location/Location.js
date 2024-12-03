import React from 'react'
import './location.css'
import { MdLocationPin } from 'react-icons/md'

const Location = () => {
  return (
    <section className='location'>
      <MdLocationPin/>
      <h2>How to get to</h2>
      <h1>Brand Hotel</h1>
      <div className='location-wrapper'>
        <p>Plot No 52 Mwangaza House 300</p>
        <p>Kikoso Road, Kikoso</p>
        <p>P.O BOX 2222-5555 Dodoma, Tanzania</p>
      </div>
      <div className='gmap'>map</div>
    </section>
  )
}

export default Location