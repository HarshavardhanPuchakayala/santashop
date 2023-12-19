import React from 'react'
import { Fade } from "react-awesome-reveal";
import "./Navbar.css"
import { IoMdPerson,IoIosBasket } from "react-icons/io";
import { IoGift,IoLocationSharp } from "react-icons/io5";
export default function Navbar() {
 
  return (
    <>
    <header>
    <nav>
        <div className='logo'>
          <a href="#Home">
            <img src="/assets/logo-white.png" alt="logo" />
            </a>
        </div>
        <div className="nav-items">
            <a href="#About"><IoMdPerson/></a>
            <a href="#Gifts"><IoGift/></a>
            <a href="#location"><IoLocationSharp /></a>
        </div>
    </nav>

     <div className="header-container" id='Home'>
     <Fade direction='up' triggerOnce={true}>
      <img src="/assets/header.png" alt="heroImg"/>
      </Fade>
      <Fade duration={800} delay={1200}>
      <div className="header-content">
        <h4>Begin your<br/>festival with...</h4>
        <p>
          This is an easy to install christmas tree which your kids or office colleagues will have a lot of fun decorating.

        </p>
      </div>
      </Fade>
      <Fade duration={700} delay={900}>
      <div className="header-tag">
        Buy This product <span><IoIosBasket /></span>
      </div>
      </Fade>
     </div>
    </header>
   
    </>
  )
}
