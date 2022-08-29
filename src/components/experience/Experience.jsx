import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
<section id='experience'>
  <h5>What skills I have?</h5>
  <h2>My Experience</h2>

  <div className='container experience__container'>
                         {/*START OF FRONTEND*/}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>ECMAScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>SASS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>REST APIs</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Git & GitHub</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

        </div>
      </div>
                         {/*END OF FRONTEND*/}
                         {/*START OF BACKEND*/}
      <div className="experience__backend">
        <h3>Other Skills</h3>
        <div className="experience__content">

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Clean code</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Agile Methodologies</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Attention to details</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Problem Solving</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Reliability & Punctuality</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Content Writing</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

        </div>
      </div>
                         {/*END OF BACKEND*/}
  </div>
</section>
  )
}

export default experience
