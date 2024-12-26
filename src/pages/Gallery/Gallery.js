import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Gallery.css'
import { Display } from '../../components'
import { hall } from '../../data/data'

const Gallery = () => {
  const title = "Gallery"

  return (
    <main className='gallery'>
      <Display title={title} image={hall.image}/>
      <nav className='gallery-nav'>
        <NavLink className='gallery-nav_link' end to="gallery">rooms</NavLink>
        <NavLink  className='gallery-nav_link' to="facility">facility</NavLink>
        <NavLink  className='gallery-nav_link' to="restaurant-gallery">restaurant</NavLink>
        <NavLink  className='gallery-nav_link' to="meetings">meetings</NavLink>
      </nav>
 
      <Outlet/>
    </main>
  )
}

export default Gallery