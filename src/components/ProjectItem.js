import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projImg from '../assets/images/projectImg.png'
const ProjItemStyles = styled.div`
 .proj_img{
     width:100%;
     height:350px;
     overflow: hidden;
     border-radius: 12px;
     display: inline-block;
     border:3px solid var(--gray-2);
     img{
         height: 100%;
     }
 }
 .proj_info{
     margin-top:1rem;
     background-color: var(--deep-dark);
     padding:1rem;
     border-radius: 12px;

 }
 .proj_title{
     font-size: 2.2rem;

 }
 .proj_desc{
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top:1rem;
   
 }
 @media only screen and(max-width:768px){
    .proj_img{
        height:300px
    }
 }
`;
export default function ProjectItem({
    img= projImg,
    title= 'Project Name',
    desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta dolorum qui saepe vero eaque, repellendus repudiandae laboriosam ipsam eius provident fuga, in reprehenderit veniam ea aspernatur necessitatibus est. Cumque?"
}) {
    return (
        <ProjItemStyles>
            <Link to='/projects' className="proj_img">
                <img src={img} alt="projImg" />
            </Link> 
                <div className="proj_info">
                    <Link to='#'>
                        <h3 className="proj_title">{title}</h3>
                    </Link>
                   <p className="proj_desc">{desc}</p>
                </div>
        </ProjItemStyles>
    )
}
