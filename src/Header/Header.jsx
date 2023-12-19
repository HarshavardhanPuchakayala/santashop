import React from 'react'
import "./Header.css"
import { Slide ,Fade} from 'react-awesome-reveal'
import Button from '../Button'
export default function Header() {
  return (
    <>
    <section className='container festival-container' id='About'>
      <div className="festival-image">
        <div className="bg"></div>
        <Slide direction='right' triggerOnce={true}>
        <img src="/assets/festive.png" alt="festival" />
        </Slide>
      </div>
      <Slide triggerOnce={true}>
      <div className="festival-content">
        <h2 className="container-header">
          Explore our range of festive collection
        </h2>
        <Fade cascade delay={300}>
        <p className="container-description">
          HO HO HO! Merriest time of the year is here.Decorate your home or office with our range of christmas utility collection.If you want to make this more fun please explore our range of commodities.

        </p>
        </Fade>
        <div className="festive-btn">
        <Fade cascade delay={500}>
          <Button>Explore The Range</Button>
          </Fade>
        </div>
      </div>
      </Slide>
    </section>
  
    </>
  )
}
