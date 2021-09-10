import React from 'react'
import PText from './PText'
import SectionTitle from './SectionTitle'
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.jpg';
import styled from 'styled-components';
const AboutStyles = styled.div`
padding:10rem 0;
 .container{
     display: flex;
     align-items: center;
     justify-content: flex-start;
     text-align: left;
 }
 .section_right{
    background: linear-gradient(285deg, black, #bcb4b4);
 }
 .section_left,.section_right{
     flex:1;
 }
 .para{
     margin-left:0;
     margin-top:2rem;
 }
 .section_title{
     text-align: left;
 }
 .section_button{
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-top:2rem;
     gap:2rem;
 }
 @media only  screen and (max-width:958px){
     .section_left{
        flex:4 ;
     }
     .section_right{
        flex:3;
        }
 }
 @media only  screen and (max-width:768px){
     .container{
         flex-direction:column;
         text-align: center;
     }
     .section_left,.section_right{
     width:100%
     }
     .section_right{
     margin-top:3rem;

     }
     .section_left{
    align-items: center;
     .section_button{
         display: flex;
         flex-direction:column;
         gap:.5rem;
         .button_wrapper,a{
             width:100%;
             text-align:center;
             }
     }
     .section_title{
     text-align: center;
 }
     
     }
 }
`
export default function AboutSecion() {
    return (
        <AboutStyles>
           <div className="container">
               <div className="section_left">
               <SectionTitle 
               subHeading="Let me introduce myself"
                heading="About Me" />
                <PText >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab earum cupiditate ullam quam non ad nulla est? Dolore amet esse iste aperiam culpa magnam ducimus cumque quaerat rem sapiente!</PText>
                <div className="section_button">
                  <Button  btnLink="/projects" btnText="Works" outline='yes'/> 
                  <Button  btnLink="/about" btnText="Read More" outline='no'/>                       
                     </div>
               </div>
               <div className="section_right">
                         <img src={AboutImg} alt="" />
                     </div>
           </div>
        </AboutStyles>
    )
}
