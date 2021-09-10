import React from 'react'

import styled from 'styled-components'
import PText from './PText'
const AboutItemStyles = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top:3rem;
.title{
    font-size: 2.4rem;
     flex: 20%;
}
.items{
    flex: 50%;
    display: flex;
    flex-wrap:wrap;
    gap:1.5rem;

}

.item{
        background-color: var(--deep-dark);
        padding:1rem;
        border-radius:8px;
        color:white;
    }
    @media only screen and (max-width:768px){
      flex-direction: column;
      align-items: flex-start;
      gap:1rem;
     .title{
        font-size: 2rem;
       
     }
      .items{
       margin-top:1rem;
       width: 100%;
       gap:1.5rem;
      }    
    }

`; 
export default function AboutInfoItem({
    title ="title",
    items =['html','css']
}) {
    return (
        <AboutItemStyles>
         <h1 className="title">{title}</h1>
         <div className="items">
             {items.map((item,index)=>{
                 return (
                     <div key={index} className="item">
                         <PText textColor="white" >{item}</PText>
                     </div>
                 )
             })}
         </div>
        </AboutItemStyles>
    )
}
