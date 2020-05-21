import React from 'react'
import { Link } from "react-router-dom";


export default function Success() {
  return(
    <div className='page-wrapper'>
      You successfully made it out of Costco!
      <br/>
      <br/>
      Start Over?
      <Link to='/'>Back Home</Link>
    </div>
  )
}