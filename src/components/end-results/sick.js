import React from 'react'
import { Link } from "react-router-dom";

import Title from '../title/title'
import './end-results.scss'

export default function Sick() {
  return(
    <div className='end-wrapper'>
      <Title/>
      <div className='end-content-wrapper'>
      <div className='message'>
        Your Health is too low to continue shopping.
      </div>
      <div className='final-results-wrapper'>
      <div className='results-message'>
        Final Results
      </div>
      <div className='final-results'>
        <div className='health'>
          Health: {props.location.state.health}%
        </div>
        <div className='security'>
          Security Awareness: {props.location.state.security}%
        </div>
        <div className='points'>
          Points in Cart: {props.location.state.points}
        </div>
        <div className='family'>
          Family Members Remaining: {props.location.state.family}
        </div>
      </div>
      </div>
      <div className='start-over-link'>
        <Link to='/'>Start Over?</Link>
      </div>
      </div>
    </div>
  )
}