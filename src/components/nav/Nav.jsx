import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {FiCode} from 'react-icons/fi'
import {MdDesignServices} from 'react-icons/md'
import {MdOutlineRateReview} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav , setActiveNav] = useState ('#')

  return (
    <nav>
      <a href="#" onClick={ () => {return setActiveNav('#')} } className= {activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={ () => {return setActiveNav('#about')} } className= {activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={ () => {return setActiveNav('#experience')} } className= {activeNav ==='#experience' ? 'active' : ''}><GoBook/></a>
      <a href="#services" onClick={ () => {return setActiveNav('#services')} } className= {activeNav ==='#services' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#portfolio" onClick={ () => {return setActiveNav('#portfolio')} } className= {activeNav ==='#portfolio' ? 'active' : ''}><FiCode/></a>
      <a href="#testimonial" onClick={ () => {return setActiveNav('#testimonial')} } className= {activeNav ==='#testimonial' ? 'active' : ''}><MdOutlineRateReview/></a>
      <a href="#contact" onClick={ () => {return setActiveNav('#contact')} } className= {activeNav ==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav