import React, { useState } from 'react'
import './header.css'
import {MdMenu} from 'react-icons/md'
import { Link } from 'react-router-dom'
import SideNav from '../sideNav/SideNav'

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
        <h4>Brand Hotel</h4>
        <p>Dodoma</p>
      </div>

      { toggleNav ? <SideNav onClick={close}/>  : null  }
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