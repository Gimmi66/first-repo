import React, { useState } from 'react'
import 'C:/Users/dell/Desktop/Host/firsthost/src/inc.css'


function Inc() {
    const [value,setValue]=useState(5)
  return (
   <>
   <div className='center'>
   <h1 style={ {textAlign:'center'}}>Increment number</h1>
    <h5 style={ {textAlign:'center'}}>{value}</h5>
    <button className='center' onClick={()=>{setValue(value+1)}}>Increment</button>
   </div>


   </>
  )
}

export default Inc