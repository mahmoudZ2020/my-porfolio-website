import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
<div className='header__socials'>
    <a href="https://www.linkedin.com/in/mahmoud-mayez2021" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/mahmoudZ2020" target="_blank"><FaGithub/></a>
    <a href="https://www.facebook.com/mahmoudzakaria2089" target="_blank"><FaFacebook/></a>
</div>
    )
}

export default HeaderSocials