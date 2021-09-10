import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ColStyles = styled.div`
.heading{
    font-size: 3rem;
    margin-bottom: 1rem;

}
li{
    margin-bottom: 1rem;
}
a{
    font-size: 1.8rem;
    margin-bottom: 1rem;
}
`;

export default function FooterCol({
    heading='heading',
    links=[{type:"Links", title:"Home",path:"/home"},
           {type:"Links", title:"About",path:"/about"},
        ]
}) {
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {
                    links.map((item,index)=>{
                 return <li key={index}>
                                {item.type ==='Links' ? (<Link to={item.path}>{item.title}</Link>) : <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>}  
                            </li>
                        
                    })
                }
            </ul>
        </ColStyles>
    )
}
