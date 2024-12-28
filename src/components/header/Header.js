import React, { useState } from 'react'
import './header.css'
import {MdMenu} from 'react-icons/md'
import SideNav from '../sideNav/SideNav'
import TopNav from '../topNav/TopNav'
import Logo from '../logo/Logo'


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
      <Logo/>

      { toggleNav ? <SideNav onClick={close}/>  : null  }
      <div className='menu-bar' onClick={open}><MdMenu/></div>

      <nav className='topnav'> <TopNav onClick={close}/> </nav>
    </header>
  )
}

export default Header