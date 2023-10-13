import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/esprit.jpg'
import AVATAR2 from '../../assets/fst.png'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'ESPRIT : Ecole Sup Privée d Ingénierie et de Technologies',
    review: ' ESPRIT est un etablissement d enseignement superieur prive, agree par l Etat, fondé en 2003'
  },
  {
    avatar: AVATAR2,
    name: 'FST : faculte des sciences tunis',
    review: ' La faculté des sciences de Tunis ou FST, de son nom complet faculté des sciences mathématiques, physiques et naturelles de Tunis, est une faculté située dans le campus d El Manar à Tunis '
  }
]

const Testimonials = () => {
  return (
   
    <section id='testimonials'>
     
     <h5> background </h5>
     <h2>Academic</h2>

     <Swiper className="container testimonials_container"   modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} >
  
    

         {

data.map(({avatar, name, review}, index) => {
  return (
    <SwiperSlide key={index} className="testimonial">
  
<div className="client__avatar">

   <img src={avatar} />

</div>
<h5 className='client__name'>{name}</h5>
   <small className='client__review'>

 {review}

   </small>
</SwiperSlide>

  )
})

         }




     </Swiper>
    </section>
  )
}

export default Testimonials