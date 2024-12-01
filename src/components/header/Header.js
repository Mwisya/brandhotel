import React, { useState } from 'react'
import './header.css'
import {MdMenu, MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'

const sideNav = [
  {item:'home', link:'/'},
  {item:'accomodation', link:'accomodation'},
  {item:'gallery', link:'gallery'},
  {item:'meetings', link:'meetings'},
  {item:'contact', link:'contact'},
  {item:'about', link:'about'},
]
const topNav = [
  {item:'home', link:'/'},
  {item:'accomodation', link:'accomodation'},
  {item:'gallery', link:'gallery'},
  {item:'meetings', link:'meetings'},
  {item:'contact', link:'contact'},
  {item:'about', link:'about'},
]

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const open = ()=>{
    setToggleNav(true)
  }
  const close = ()=>{
    setToggleNav(false)
  }
  return (
    <header>
      <div className='logo'>
        <i>logo</i>
        <h2>Brand Hotel</h2>
      </div>

      {
        toggleNav ? 
        <nav className='sidenav'>
          <div className='sidenav-logo'>
            <i>logo</i>
            <h1>Brand Hotel</h1>
          </div>

          <div className='close-nav' onClick={close}><MdClose/></div>
          {
            sideNav.map((item, index)=>(
              <Link to={item.link} key={index} onClick={close}>{item.item}</Link>
            ))
          }
        </nav> : null
      }

      <div className='menu-bar' onClick={open}><MdMenu/></div>
      <nav className='topnav'>
        {
          topNav.map((item, index)=>(
            <Link to={item.link} key={index}>{item.item}</Link>
          ))
        }
      </nav>
    </header>
  )
}

export default Header