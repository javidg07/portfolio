import React from 'react'
import styled from 'styled-components'
const PStyle = styled.div`
  .text-color{
      color: ${(props=>
        props.textColor ==='grey' ? 'var(--gray-1)': props.textColor === 'white' ? 'white' : 'black' 
        )};
        font-weight:${(props=>
            props.font ==='bond' ? 'bold' :'normal'
            )};
            font-size: 1rem;
  }

`
export default function PText({children,textColor="grey",font="normal"}) {
    return (
        <PStyle  textColor ={textColor} font={font}> 
            <div className="text-color para">
            {children}
            </div>
        </PStyle>
    )
}
