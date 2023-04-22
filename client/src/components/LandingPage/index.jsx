import React from 'react'
import Landing from '../Section0/section0'
import About from '../Section1/section1'
import About2 from '../Section2/section2'
import Navbar from './navbar'
import './Landingpage.css'

const LandingPage = () => {
  return (
    <div className="home">
        <Navbar/>
        <Landing/>
        <About/>
        <About2/>
    </div>
  )
}

export default LandingPage