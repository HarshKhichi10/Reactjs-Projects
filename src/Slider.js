import React,{ useState }from 'react'
import Slidercontent from './Slidercontent'
import Arrow from './Arrow'
import Slide from './Slide'
import { css , jsx } from '@emotion/core'
import Dots from './Dots'
import './App.css'

const Slider =props => {
    const getWidth = () => window.innerWidth
     
    const [state, setState] = useState({
        translate: 0,
        transition:0.45,
        activeIndex: 0
    })

   const { transition, translate,activeIndex } = state
   const nextslide =() => {
       if(activeIndex === props.slides.length -1){
            return setState({
                ...state,
                translate : 0,
                activeIndex : 0
            })
       }
       setState({
           ...state,
           activeIndex : activeIndex +1,
           translate :(activeIndex +1) * getWidth()

       })
   } 
   const prevstate =()=>
   {
         if(activeIndex ===0){
             return setState ({
                 ...state,
                 activeIndex: props.slides.length  -1 ,
                 translate: (props.slides.length -1) * getWidth()
             })
            }
            setState({
                ...state,
                activeIndex : activeIndex -1,
                translate :(activeIndex -1) * getWidth()
            })


   }
   
   return (


        <div css={SliderCSS}>
          <Slidercontent 
          translate ={translate} 
          transition={transition} 
          width={getWidth() * props.slides.length} >
              
         {props.slides.map((slide, i)=>(
             <Slide key={slide +i} content ={slide} />
             ))}     </Slidercontent> 
          <Arrow direction='left' handleClick={prevstate} />
          <Arrow direction='right' handleClick={nextslide} />
          <Dots slides={props.slides} activeIndex= {activeIndex} />
        </div>
    )
}
const SliderCSS = css`
 position: relative;
height:100vh;
width:100vw;
margin: 0 auto;
overflow:hidden;
`
export default Slider
