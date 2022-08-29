import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><BsCodeSlash/></a>

      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mahmoud-mayez2021" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/mahmooodzakaria" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/mahmoudzakaria2089" target="_blank"><FaFacebookF/></a>
      </div>
      <div className="footer__copy">
        <small>Made By  <a href="#" >Mahmoud</a> &copy; All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer