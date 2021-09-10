import React from 'react'
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServiceSectionItems from './ServiceSectionItems'
const ServiceStyles = styled.div`
  padding:10rem 0;
.service_allitems{
    display: flex;
    gap:18rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width:768px){
    .service_allitems{
        flex-direction: column;
       max-width:350px;
       margin:0 auto;
       margin-top: 3rem;
       gap:5rem;
    }
}
 
`;
export default function ServiceSection() {
    return (
        <ServiceStyles>
         <div className="container">
         <SectionTitle
            subHeading="What i can do for you"
            heading="Services"
           />
           <div className="service_allitems">
                <ServiceSectionItems
                 icon ={<MdDesktopMac/>}
                 title = "Website Design"
                 desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, repellat consequuntur nobis enim magnam, dolorem ex esse dolore qui animi doloribus tenetur veritatis quidem eaque mollitia ipsum, magni exercitationem ipsa"
                />
                <ServiceSectionItems
                  icon ={<MdDesktopMac/>}
                  title = "Website Design"
                  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, repellat consequuntur nobis enim magnam, dolorem ex esse dolore qui animi doloribus tenetur veritatis quidem eaque mollitia ipsum, magni exercitationem ipsa"/> 
                <ServiceSectionItems
                  icon ={<MdDesktopMac/>}
                  title = "Website Design"
                  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, repellat consequuntur nobis enim magnam, dolorem ex esse dolore qui animi doloribus tenetur veritatis quidem eaque mollitia ipsum, magni exercitationem ipsa"/>
           </div>
         </div>
        </ServiceStyles>
    )
}
