import React from 'react'
import { Link } from "react-router-dom";


export default function KickedOut() {
  return(
    <div className='page-wrapper'>
      You were kicked out of Costco.
      <br/>
      <br/>
      Start Over?
      <Link to='/'>Back Home</Link>
    </div>
  )
}