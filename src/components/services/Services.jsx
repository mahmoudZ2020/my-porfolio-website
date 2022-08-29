import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
<section id='services'>
  <h5>What I Offer?</h5>
  <h2>Services</h2>

  <div className="container services__container" >

    <article className="service">
      <div className="service__head">
        <h3>Websites & Web Applications</h3>
      </div>
      <ul className="service__list">
        <li>
           <BiCheck className='service__list-icon' />
            <p>Corporate</p>

        </li>
        <li>
           <BiCheck className='service__list-icon' />
            <p>Social Media Integration</p>

        </li>
        <li>
          <BiCheck className='service__list-icon' />
            <p>E-commerce</p>

        </li>
        <li>
          <BiCheck className='service__list-icon' />
            <p>Learning Management System (LMS)</p>

        </li>
        <li>
          <BiCheck className='service__list-icon' />
            <p>Portfolio</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>TV or Video Streaming</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Event Calendar</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Portals</p>

        </li>
      
      </ul>
    </article>
                        {/*END OF Websites & Web Applications*/}  

    <article className="service">
      <div className="service__head">
        <h3>Web Support & Maintenance</h3>
      </div>
      <ul className="service__list">
        <li>
         <BiCheck className='service__list-icon' />
            <p>Custom Website Development</p>

        </li>
        <li>
          <BiCheck className='service__list-icon' />
            <p>Website Maintenance</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>E-commerce Website Development</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Blog Customization or Management</p>

        </li>

        <li>
         <BiCheck className='service__list-icon' />
            <p>Graphic Design</p>

        </li>
      
      </ul>
    </article>
                        {/*END OF Web Support & Maintenance*/}  

    <article className="service">
      <div className="service__head">
        <h3>Content Management Systems (CMS)</h3>
      </div>
      <ul className="service__list">
        <li>
         <BiCheck className='service__list-icon' />
            <p>Supporting new design elements.</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Reducing maintenance costs.</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Increasing platform speed.</p>

        </li>
        <li>
         <BiCheck className='service__list-icon' />
            <p>Migrating to self-hosted services.</p>

        </li>
        <li>
          <BiCheck className='service__list-icon' />
            <p>Upgrading current technologies.</p>

        </li>
      
      </ul>
    </article>
                        {/*END OF Content Management Systems*/}  
  </div>
</section>
  )
}

export default services