import React from 'react'
import styled from 'styled-components'
const SectionTitleStyles = styled.div`
  text-align:center;
  p{
    font-family: 'RobotoMono Regular';
  font-size: 2rem;
  }
   h2{
    font-family: 'Montserrat Bold';
     font-size: 6rem;
     text-transform: uppercase;
     margin-top:.5rem;
   }
  

   @media only screen and (max-width:768px){
       p{
        font-size: 1rem;   
       }
       h2{
        font-size: 3rem; 
       }
   }
 
`
export default function SectionTitle({
    subHeading='subHeading',
    heading='heading'
}) {
    return (
        <SectionTitleStyles className="section_title" >
            <p>{subHeading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyles>
    )
}
