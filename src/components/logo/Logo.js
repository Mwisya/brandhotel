import React from 'react'
import './logo.css'
import logo from '../../logo.png'

const Logo = () => {
  return (
    <div className='hotel-logo-container'>
      <img src={logo} alt='' className='hotel-logo'/>
      <h3 className='hotel-name'>brand hotel</h3>
    </div>
  )
}

export default Logo