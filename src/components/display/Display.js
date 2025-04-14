import React from 'react'
import './display.css'

const Display = ({title, image}) => {
  return (
    <section className='display'>
      <img src={image} loading='lazy' alt="" />
      <div className='display-heading'>
        <p>explore</p>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Display