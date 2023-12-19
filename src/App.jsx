import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from "./Header/Header"
import Category from "./Category/Category"
import Explore from "./Explore/Explore"
import Footer from './Footer/Footer'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Category/>
      <Explore/>
      <Footer/>
    </div>
  )
}
