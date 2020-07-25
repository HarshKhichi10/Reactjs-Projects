import React from 'react'

import {css, jsx } from '@emotion/core'

const Arrow = ( {direction , handleClick} ) => (
         <div onClick={handleClick}
          css={css`
           display:flex;
        position : absolute;
  top: 50%;
   ${direction === 'right' ? 'right: 25px' : 'left : 25px;'};
     height: 50px;
     width: 50px;
     justify-content: center;
     background: white;
     border-radius: 50%;
     cursor: pointer;
     align-items: center;
     transition : transform ease-in 0.1s;
     &:hover{
         transform:scale(1.1); 
         
         
     }
     img{
        translateX(${direction === 'left' ? '-2' :'2'}px);
     &:focus{
         outline: 0;
     }  
    }   
   
`}
>
    {direction === 'right' ? <i className="fa fa-arrow-left" aria-hidden="true"></i> :<i className="fa fa-arrow-right" aria-hidden="true"></i>}
</div>

)
export default Arrow


