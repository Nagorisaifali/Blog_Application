import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import About from './About'
import Services from './Service'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home
