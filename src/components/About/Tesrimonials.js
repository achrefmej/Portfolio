import React from "react";
import { Row } from "react-bootstrap";
import './Services.css'
import { BsCheck2All } from 'react-icons/bs'
import './Testimonials.css'
import AVATAR1 from '../../Assets/esprit.jpg'
import AVATAR2 from '../../Assets/fst.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import {  Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'ESPRIT : Ecole Sup Privée d Ingénierie et de Technologies',
    review: ' ESPRIT est un établissement d enseignement supérieur privé, agréé par l État, fondé en 2003'
  },
  {
    avatar: AVATAR2,
    name: 'FST : faculté des sciences tunis',
    review: ' La faculté des sciences de Tunis ou FST, de son nom complet faculté des sciences mathématiques, physiques et naturelles de Tunis, est une faculté située dans le campus d El Manar à Tunis '
  }
]

function Tesrimonials() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <div className="container services__container">
        <section id='testimonials'>
    
          <Swiper className="container testimonials_container"
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
            {
              data.map(({ avatar, name, review }, index) => {
                return (
                  <SwiperSlide key={index} className="testimonial">
                    <div className="client__avatar">
                      <img src={avatar} alt={`Avatar ${index}`} />
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
      </div>
    </Row>
  );
}

export default Tesrimonials;
