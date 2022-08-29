import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFileEarmarkCode} from 'react-icons/bs'

const about = () => {
  return (
<section id='about'>
  <h5>Get to know</h5>
  <h2>About me</h2>

  <div className="container about__container">

    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About me" />
      </div>
    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className="about__card-icon" />
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>
        <article className="about__card">
          <FiUsers className="about__card-icon" />
          <h5>Clients</h5>
          <small>20+ Worldwide</small>
        </article>
        <article className="about__card">
          <BsFileEarmarkCode className="about__card-icon" />
          <h5>Projects</h5>
          <small>50+ Completed</small>
        </article>
      </div>
        <p>Hi There, I'm Mahmoud a Front-End Web Developer. It's been 2 years, I'm working in web development. I have developed many websites and web apps and also provided my services as a freelancer for many clients by getting their needs with a high level of efficiency.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
</section>
    ) 
}

export default about