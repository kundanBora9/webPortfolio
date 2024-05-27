import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar () {
  return (
    <div className='flex justify-around content-center m-5 text-white'>
        <h3>Kundan.dev</h3>
        <ul className='flex gap-5 content-center'>
            <li><AnchorLink className='anchor-link'href='#home'>Home</AnchorLink> </li>
            <li><AnchorLink className='anchor-link'href='#about'>About</AnchorLink></li>
            <li><AnchorLink className='anchor-link'href='#Project'>Project</AnchorLink></li>
            <li><AnchorLink className='anchor-link'href='#Contact'>Contact</AnchorLink></li>
        </ul>
        <div className=' px-1 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 hover:transition duration-700 ease-in-out cursor-pointer'><AnchorLink className='anchor-link'href='#Contact'>Connect With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar