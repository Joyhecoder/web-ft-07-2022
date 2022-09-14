import React from 'react'


const welcome = () => {
  return (
    <>
       {/* <div style={{backgroundColor: 'blue', fontSize: '30px'}} className="div1">welcome to our space</div>  */}
       <div style={myStyles.h1Style} className="div1">welcome to our space</div> 
       <div style={myStyles.aNewStyle} className="div1">welcome to our space</div> 

    </>
  )
}

const myStyles = {
    h1Style : {
        backgroundColor: 'orange',
        fontSize: '50px'
    },
    aNewStyle : {
        backgroundColor: 'teal',
        fontSize: '30px'
    }
}

export default welcome