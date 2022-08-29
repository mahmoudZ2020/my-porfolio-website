import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef}  from 'react';
import emailjs from 'emailjs-com';


const Contact=() =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5vp3s3b', 'template_ttzhdr9', form.current, 'LrewMa1IY1T5buBOy')
    e.target.reset()
    };

  return (
<section id='contact'>
  <h5>Get In Touch </h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">

    <div className="contact__options">
      
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h6>mahmoud.2020.hun@gmail.com</h6>
          <a href="mailto:mahmoud.2020.hun@gmail.com" target={'_blank'}>Send a message</a>
        </article>

        <article className="contact__option">
          <BsMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>Mahmoud Zakaria</h5>
          <a href="https://m.me/mahmoudzakaria2089" target={'_blank'}>Send a message</a>
        </article>
      
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>What's App</h4>
          <h5>+491779730641</h5>
          <a href="https://api.whatsapp.com/send?phone=491779730641" target={'_blank'}>Send a message</a>
        </article>

    </div>
                          {/*  END OF CONTACT */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='Name' placeholder='Full name' required/>
      <input type="email" name='Email' placeholder='Email@domain.com' required/>
      <textarea name="Message"rows="7" placeholder='Your message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>

  </div>

</section>
  )
}

export default Contact