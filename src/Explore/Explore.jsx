import React from 'react'
import "./Explore.css"
import Button from '../Button'
import { Slide,Fade } from "react-awesome-reveal";
export default function Explore() {
  return (
    <>
    <section className='container explore-container' id='location'>
        <div className="explore-img">
            <Fade cascade delay={900} triggerOnce={true}>
            <div className="bg"></div>
            </Fade>
            <Slide cascade duration={1000} triggerOnce={true}>
            <img src="/assets/explore.png"/>
            </Slide>
        </div>
        <div className="explore-content">
        <Fade cascade delay={300} triggerOnce={true}>
            <h2 className="explore-header">
                Explore our decor range of the season
            </h2>
            </Fade>
            <Fade cascade delay={400} triggerOnce={true}>
            <p className="explore-description">
                The Christmas festivity is incomplete without a holiday wreath decorated extravagantly with tinsels and glittery flowers.
            </p>
            </Fade>
            <div className="explore-btn">
            <Fade cascade delay={500} triggerOnce={true}>
                <Button>Explore the decors</Button>
                </Fade>
            </div>
        </div>
    </section>
    <section className="Newsletter" id='contact'>
        <div className="container Newsletter-container">
            <h2 className='container-header'>
                Subscribe now and win some <span>amazing</span> coupons
            </h2>
            <form className='Newsletter-form'>
                <input type="text" placeholder='Enter your Email' />
               <button className='btn'> <p>Subscribe</p></button>
            </form>
        </div>
    </section>
    </>
  )
}
