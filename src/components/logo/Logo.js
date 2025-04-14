import React from 'react'
import './logo.css'
import logo from '../../logo.png'

const Logo = () => {
  return (
    <div className='hotel-logo-container'>
      <i className='hotel-logo'>
        <img src={logo} alt=''/>
      </i>
      <h3 className='hotel-name'>brand hotel</h3>
    </div>
  )
}

export default Logo