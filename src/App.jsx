import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
function App (){
  return (
    <div>
  <Navbar/>
  <Hero/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
    </div>
  )
}

export default App