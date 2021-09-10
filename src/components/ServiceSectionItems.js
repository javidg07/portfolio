import React from 'react'
import {MdDesktopMac} from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText'

const ItemsStyle = styled.div`
text-align: center;
.service_items_icon{
    svg{
        width:3rem;
    }
   .serviceItem_title{
       font-size: 2.5rem;
       font-family: 'Monserrat SemiBold' ;
   } 
   .para{
       margin-top:2rem;
   }
}
`;
export default function ServiceSectionItems({
    icon =<MdDesktopMac/>,
    title ="Web Design",
    desc = "Description"
}) {
    return (
        <ItemsStyle>
           <div className="service_items_icon">
               {icon} </div>
               <div className="serviceItem_title">{title}</div>
               <PText>{desc}</PText>
          
        </ItemsStyle>
    )
}
