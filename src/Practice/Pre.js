import React, { useState } from 'react'
import Classcomponent from './Classcomponent'
import Functional from './Functional'
import './Style.css'

const Pre = () => {

const [name,SetName]=useState(false);
const [name2,SetName2]=useState(false);


  return (
    <>

<h1 className='h'>Styling using Functional and Class component</h1>


<button className='btn1' onClick={()=>name ? SetName(false): SetName(true)}> To see styling in functional component</button>

<button className='btn2' onClick={()=>name2 ? SetName2(false):SetName2(true)}>To see styling in class component</button>


{name&&<Functional />}
{name2&&<Classcomponent />}



 

    </>
  )
}

export default Pre