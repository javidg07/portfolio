import React from 'react'
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import {Swiper, SwiperSlide} from 'swiper/react';
import  SwiperCore, {Navigation} from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css'
SwiperCore.use([Navigation]);


const ProjectStyles = styled.div`
   padding:10rem 0;
.proj_allitems{
    display: flex;
    gap:3rem;
    margin-top:5rem;

}
.swiper-container{
  padding-top:8rem;
  max-width: 100%;
}
.swiper-button-prev,.swiper-button-next{
    position: absolute;
    height: 50px;
    width:50px;
    background-color: var(--deep-dark);
    z-index:10;
    top:0;
    left:auto;
    right:60px;
    transform:translateY(50%);
    color:red;
    border-radius: 8px;

    }
    .swiper-button-next{
      right:0
    }
    .swiper-button-prev::after, .swiper-button-next::after{
    font-size: 2rem;
    }
    @media only screen and (max-width:768px){
     .proj_allitems{
         flex-direction: column;
         max-width: 400px;
         margin:0 auto;
         margin-top:2rem;
         gap:5rem;
     }
     .proj_img{
         width:100%
     }
    }
`;
export default function ProjectSection() {
    return (
        <ProjectStyles>
            <div className="container">
           <SectionTitle 
           heading="Projects"
           subHeading="Some of my recent work"
           />
           <div className="proj_allitems">
           <Swiper spaceBetween={30} slidesPerView={1} 
           navigation
            breakpoints={{
                    648:{
                        slidesPerView:1,
                    }, 
                     768:{
                        slidesPerView:2,
                    },
                    1200:{
                        slidesPerView:3,
                    },
                }}
           >
            {projects.map((proj,index)=>{
               if(index >=5) return;
               return (
                   <SwiperSlide key={proj.id}>
                      <ProjectItem title={proj.name} desc={proj.desc} img={proj.img} />
                   </SwiperSlide>
                  
               )
            })}
           </Swiper>
           </div>
            </div>
        </ProjectStyles>
    )
}
