import React,{useState} from 'react'
import './slider.scss'
import ImgComp from './ImgComp'
import i1 from '../pics/i1.jpg'
import i2 from '../pics/i2.jpg'
import i3 from '../pics/i3.jpg'
import i4 from '../pics/i4.jpg'
import i5 from '../pics/i5.jpg'

function Slider() {
    
    const SliderArr = [<ImgComp src={i1}/>, <ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>,<ImgComp src={i5}/>];
    const [x, setx] =useState(0)
    const goLeft =()=>{
        setx(x +100);
        x === 0 ? setx( -100 *(SliderArr.length -1)) : setx(x +100);
    };

    const goRight =()=>{
        setx(x -100);
        x === -100 *(SliderArr.length -1) ? setx (0) :setx(x -100);
    };



    return (
        <div className="slider">
            {SliderArr.map(item =>{
               return (
                   <div className="slide" style={{transform: `translateX(${x}%)`}}>{item} </div>
               
                   );   
            })
            }
            <button id="goleft" onClick={goLeft}> <i class="fa fa-chevron-left" aria-hidden="true"></i></button> 
            <button id="goright"onClick={goRight}><i class="fa fa-chevron-right" aria-hidden="true"></i></button> 
        </div>
    )
}

export default Slider
