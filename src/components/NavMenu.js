import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
 import {MdClose,MdMenu} from 'react-icons/md'; 
 
const NavMenuStyle = styled.div`
    background-color: var(--dark-bg);
    padding:1rem 0;
    margin:0 auto;
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
    width:100%;
  ul{
    max-width:1200px;
    margin:0 auto;
    width:98%;
    text-align: center;
   
    li{
      display: inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      &:hover{
        background-color: var(--deep-dark) ;
      }
      a{
        font-family:'RobotoMono Regular';
       font-size: 2rem;
       padding:1rem 2rem;
       outline:none;
       color:var(--gray-1);
      }
      .active{
        color:var(--white)
      }
    }
  }
  .mobile-menu-icon{
    position: absolute;
    width:4rem;
    top: 1rem;
    right:1rem;
    cursor:pointer;
    outline: none;
    display: none;
    *{
          pointer-events: none;
        }
  }
  .mobile-close-icon{
    display: none;
   
   
  }
  @media only screen and (max-width: 768px){
    padding:0;
    .hide-item{
     transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon{
      display: block;
    }
    .navItems{
      --top:1rem;
      transition: 0.3s linear transform;
      background-color: var(--deep-dark);
       top: var(--top);
       border-radius: 12px;
       right:1rem;
       position: absolute;
       width: 90%;
       max-width: 300px;
       padding:2rem;
      .mobile-close-icon{
        display: block;
        width:3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
     
      }
      li{
       display: block;
       margin-bottom: 1rem;
      }
    }
  } 
  
`
const NavMenu = () => {
const [showNav, setshowNav] = useState(false);

  return (
  <NavMenuStyle >
    <div className='mobile-menu-icon' onClick={()=>setshowNav(!showNav) }
    role="button" tabIndex={0}>
      <MdMenu/>
    </div>
   <ul className={!showNav ? 'hide-item navItems' :'navItems' }>
     <div className='mobile-close-icon' onClick={()=>setshowNav(!showNav)}  role="button" tabIndex={0}>
     <MdClose/>
     </div>
     <li><NavLink to="/" exact onClick={()=>setshowNav(!showNav)}>Home</NavLink></li>
     <li><NavLink to="/about" onClick={()=>setshowNav(!showNav)}>About</NavLink></li>
     <li><NavLink to="/projects" onClick={()=>setshowNav(!showNav)}>Projects</NavLink></li>
     <li><NavLink to="/contact" onClick={()=>setshowNav(!showNav)}>Contact</NavLink></li>
   </ul>
  </NavMenuStyle>
  )
};

export default NavMenu;
