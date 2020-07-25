import React from 'react'

function ImgComp({src}) {
   const imgstyles ={
       width : 100 +'%',
       height: 'auto'
   }

    return (
        <div>
            <img src={src} alt="images" style={imgstyles} />
        </div>
    )
}

export default ImgComp
