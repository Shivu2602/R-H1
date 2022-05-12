// rafce--> It is an shortcut for functional arrow component


import React from 'react'
import "./Style.css"
const Functional = () => {
  return (
     <div className='container'>
    
    <h1>This is created using functional componet</h1>
    <p>This is done using External Css</p>
    <p style={{color:'blue'}}>This is done using Internal Css</p>
      
       </div>

  

  
  )
}

export default Functional