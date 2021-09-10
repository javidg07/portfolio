import React from 'react'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components';
import PText from './PText';
const ContactItemStyles = styled.div`
   padding: 2rem;
   margin-bottom: 2rem;
   background-color: var(--deep-dark);
   display: flex;
   align-items: center;
   gap: 2rem;
   border-radius: 8px;
   .icon{
     
       background-color: var(--gray-2);
       padding:1.3rem;
       align-items: center;
       justify-content: center;
       border-radius: 50%;

   }
   .icon path{
       color:var(--white);
   }
   svg{
       width:3.5rem;
   }
`;
export default function ContactInfoItem({
    icon= <MdPlace/>,
    text="this is an info",

}) {
    return (
        <ContactItemStyles>
            <div className="icon">
              {icon}
            </div>
            <div className="info">
                <PText>{text}</PText>
            </div>
        </ContactItemStyles>
    )
} 
