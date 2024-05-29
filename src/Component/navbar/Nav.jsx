
import { Navbar } from "flowbite-react";
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div>
      <Navbar fluid rounded className="bg-black mx-20">
      <Navbar.Brand  href="#home" >
        <span className="  text-xl font-semibold text-white">Kundan.dev</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mt-3">
        <Navbar.Link href="#home" className="text-white text-lg font-semibold">
          Home
        </Navbar.Link>
        <Navbar.Link  href="#about" className="text-white text-lg font-semibold">
          About
        </Navbar.Link>
        <Navbar.Link href="#Project" className="text-white text-lg font-semibold">Project</Navbar.Link>
        <Navbar.Link href="#Contact" className="text-white text-lg font-semibold">Contact</Navbar.Link>
        <Navbar.Link href="https://github.com/kundanBora9" target="_blank" className="text-white"><FontAwesomeIcon icon={faSquareGithub} size="2x" /></Navbar.Link>
        <Navbar.Link href="https://www.linkedin.com/in/kundan-bora-2a482a24a/" target="_blank" className="text-white"><FontAwesomeIcon icon={faLinkedin}size="2x" /></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Nav