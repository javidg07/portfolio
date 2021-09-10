import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ButtonStyle = styled.div`
margin-top:2rem;
  .button{
      font-size: 2rem;
      text-align: center;
      background-color: ${(props=>
        props.outline === 'yes' ?  'var(--gray-1)' :'transparent'   
      )} ;
      padding:.5em 2em;
      border-radius: 8px;
      display: inline-block;
      border:1px solid var(--gray-1);
      color: ${(props=>
        props.outline ==='yes' ? 'black' : 'white'
        )};
      
  }
  @media  only screen and (max-width:768px){
      .button{
        font-size: 1.7rem;
      }
  }
`
export default function Button({btnLink,btnText="Button",outline="no"}) {
    return (
        <ButtonStyle outline={outline} className="button_wrapper">
            <Link className='button' to={btnLink} > {btnText}</Link>
        </ButtonStyle>
    )
}
