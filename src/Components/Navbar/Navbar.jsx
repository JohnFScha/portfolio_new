import React, { useState } from 'react'
import './Navbar.scss'
import { AiOutlineHome, AiOutlineUser, AiFillMessage } from 'react-icons/ai' 
import { BiBook } from 'react-icons/bi'
import { RiServiceLine, RiSuitcaseFill } from 'react-icons/ri'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiSuitcaseFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar