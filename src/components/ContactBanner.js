 import React from 'react';
import PText from './PText';
 import Button from './Button';
import styled from 'styled-components';
 const ContactStyles = styled.div`
  padding:10rem 0;
  .banner_wrapper{
      background-color: var(--deep-dark);
      border-radius: 12px;
      padding:5rem 0;
      text-align: center;
  }
    .banner_header{
        font-size: 4rem;
        margin-bottom:2rem;
    }
  @media only screen and (max-width:768px){
    .banner_header{
        font-size: 2rem;
        margin-bottom:2rem;
    }
  }
 `
 ;
 export default function ContactBanner() {
     return (
         <ContactStyles>
             <div className="container">
                 <div className="banner_wrapper">
                     <PText>
                        Have you got a project in mind 
                     </PText>
                 <h3 className="banner_header">
                     Let me assist you 
                 </h3>
                 <Button outline="yes" btnText="Contact Now" btnLink="/contact"/>
                 </div>
             </div>
         </ContactStyles>
     )
 }
 