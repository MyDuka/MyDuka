import React from 'react'
import Landing from './sections/section0'
import About from './sections/section1'
import About2 from './sections/section2'
import Navbar from './navbar'
import Footer from  './sections/footer'
import './Landingpage.css'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <About/>
        <About2/>
        <Footer/>
    </div>
  )
}

export default LandingPage;