import React from 'react'
import Nav from './Component/navbar/Nav'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
function App (){
  return (
    <div>
  <Nav/>
  <Hero/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
    </div>
  )
}

export default App