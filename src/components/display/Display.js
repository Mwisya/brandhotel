import React from 'react'
import './display.css'

const Display = ({title, image}) => {
  return (
    <section className='display'>
      <img src={image} alt="" />
      <h1 className='title'>{title}</h1>
    </section>
  )
}

export default Display