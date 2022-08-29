import React from 'react'
import './testimonial.css'
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:avt1,
    name: 'Khairallah Al-Awady',
    review: 'Wonderful communication, patience, and work! Thank you Mahmoud!' ,
  },
  {
    avatar:avt2,
    name: 'Muhammad Elkebeer',
    review: 'I totally recommend Him! He was very attentive to the project, He finished it in the estimated time.' ,
  },
  {
    avatar:avt3,
    name: 'Ahmed El-Fadaly',
    review: 'Mahmoud is very reliable and the ultimate professional. I would recommend him for all of your graphic designing needs. He will not disappoint you!.' ,
  },
]

const Testimonials = () => {
  return (
<section id='testimonial'>
  <h5>Review from Clients </h5>
  <h2>Testimonials</h2>

  <Swiper  modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      className="container testimonial__container">
     
  {
          data.map(({avatar,name,review,index} ) => {
            return (

      <SwiperSlide key={index} className="testimonial">
        <div className="clients__avatar">
          <img src={avatar} />
        </div>
        <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
      </SwiperSlide>
      
      )
    }
    )
  }
  </Swiper>

</section>
  )
}

export default Testimonials