import React from 'react'
import { Link } from "react-router-dom";


export default function Sick() {
  return(
    <div className='page-wrapper'>
      Your Health is too low to continue shopping.
      <br/>
      <br/>
      Start Over?
      <br/>
      <br/>
      <Link to='/'>Back Home</Link>
    </div>
  )
}