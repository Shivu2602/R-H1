// rcc--> It is an shortcut for creating class component


import React, { Component } from 'react'
import "./Style.css"

export default class Classcomponent extends Component {
  render() {
    return (
      
        <div className='container1'>
      
        <h1>This is created using class componet</h1>
        <p>This is done using External Css</p>
        <p style={{color:'red'}}>This is done using Internal Css</p>
          
          </div>
    )
  }
}
