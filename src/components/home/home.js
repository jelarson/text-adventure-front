import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";
// import Title from "../title/title";

export default function Home() {
  return (
    <div className='home-wrapper'>
      {/* <Title /> */}
      <div className='goal-wrapper'>
        <div className='goal-title'>The Goal:</div>
        <div className='goal'>
          Make it in and out of Costco with your spouse and two children to{" "}
          <span>get the essential groceries you need</span> (Toilet Paper,
          Bottled Water, and maybe some free samples too).{" "}
          <span>You'll have to keep your health above 0%</span> while also
          juggling your{" "}
          <span>Security Awareness Score and keeping it below 100%</span> -
          don't want those pesky security guards to toss you out of the store
          before you finish shopping! Oh, and it might be a good idea to{" "}
          <span>
            make it outside with as many of your family members as possible
          </span>
          . Good luck!
        </div>
      </div>
      <div className='begin-button-wrapper'>
        <Link to='/adventure/1' className='begin-button'>
          Begin Your Adventure
        </Link>
      </div>
      {/* <div className='logo'>
        <img src='https://costco-adventure.s3-us-west-1.amazonaws.com/Screenshot_2020-05-15+Costco+Survivor.png'/>
      </div> */}
    </div>
  );
}
