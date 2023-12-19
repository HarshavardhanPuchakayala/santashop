import React from 'react'
import "./Footer.css"
import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import {Fade} from "react-awesome-reveal"
export default function Footer() {
  return (
    <>
    <footer className='container footer-container'>
        <div className="footer-col">
            <div className="footer-logo">
                <img src="/assets/logo-red.png" />
            </div>
            <p className="container-description">
                Santa's shop is a conceptualised christmas shopping platform acress South Asia and certain parts of America.
            </p>

        </div>
        <div className="footer-col">
            
            <ul className="footer-links">
            <Fade cascade triggerOnce={true}>
                <li><a href="#About">About us</a></li>
                <li><a href="#contact">Franchise</a></li>
                <li><a href="#About">Events</a></li>
                <li><a href="#Gifts">Shop</a></li>
                <li><a href="#contact">Blog</a></li>
                </Fade>
            </ul>
            
            <ul className="social">
            <Fade cascade triggerOnce={true}>
                <li>
                    <a href="#"><FaFacebook className='SocailIcon'/></a>
                </li>
                <li>
                    <a href="#"><FaXTwitter className='SocailIcon'/></a>
                </li>
                <li>
                    <a href="#"><FaInstagram className='SocailIcon'/></a>
                </li>
                <li>
                    <a href="#"><FaLinkedin className='SocailIcon'/></a>
                </li>
                </Fade>
            </ul>
        </div>
    </footer>
    <div className="footer-bar">
        Copyright © 2023 Santa Shop | All Rights reserved
    </div>
    </>
  )
}
