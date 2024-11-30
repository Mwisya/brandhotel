import React from 'react'
import './location.css'
import { MdLocationPin } from 'react-icons/md'

const Location = () => {
  return (
    <section className='location'>
      <MdLocationPin/>
      <h1>How to get to</h1>
      <h1>Brand Hotel Dodoma</h1>
      <div className='location-wrapper'>
        <p>Dodoma <br/> 5km from the CBD</p>
        <p>Kikoso Road, Kikoso</p>
        <p>P.O BOX 2222-5555 Dodoma, Tanzania</p>
      </div>
    </section>
  )
}

export default Location