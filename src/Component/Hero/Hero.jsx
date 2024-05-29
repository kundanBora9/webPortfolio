import React from 'react'
import profileimg from '../../assest/profileimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div id='home' className='text-white m-20 gap-1'>
      <div className='mx-auto text-center'>
      <img src={profileimg} alt="" className=' size-4/5 mx-auto md:size-3/12   lg:size-3/12 ' />
        <h1 className='text-3xl md:text-5xl lg:text-7xl'><span className=' sm:text-3xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 md:break-after-column'>I'm Kundan Bora,</span>Frontend developer based in India.</h1>
        <p className='text-1xl md:text-2xl lg:text-2xl'>Passionate front-end developer with a creative flair and a drive for continuous learning.</p>
      </div>
      <div className='md:flex md:justify-center md:gap-3 md:content-center md:mt-2  lg:flex justify-center gap-3 content-center mt-2'>
      <div className=' px-1 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer hover:border-2'><AnchorLink className='anchor-link'href='#Contact'>Connect With Me </AnchorLink></div>
      <div className='border p-1 rounded-lg cursor-pointer hover:border-indigo-800 '>  <a href="https://example.com/my-resume.pdf" target="_blank" download="my-resume.pdf" className="text-white">My Resume</a></div>
      </div>
       
    </div>
  )
}

export default Hero