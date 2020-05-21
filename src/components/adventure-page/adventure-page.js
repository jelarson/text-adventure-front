import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./adventure-page.scss";
import { UserContext } from "../context/context";

export default function AdventurePage(props) {
  const { player } = useContext(UserContext);
  const [currentAdventure, setCurrentAdventure] = useState({});
  const [health, setHealth] = useState(player.health);
  const [security, setSecurity] = useState(player.security);
  const [family, setFamily] = useState(player.family);
  const [points, setPoints] = useState(player.points);

  console.log(player);

  let slug = props.match.params.slug;

  useEffect(() => {
    axios
      .get(`https://jel-text-adventure-api.herokuapp.com/adventure/${slug}`)
      .then((response) => {
        setCurrentAdventure(response.data);
      })
      .catch((err) => console.log(err));

    if (slug > 1) {
      setHealth(props.location.state.health);
      setSecurity(props.location.state.security);
      setFamily(props.location.state.family);
      setPoints(props.location.state.points);
    }
  }, []);

  return (
    <div className='adventure-page-wrapper'>
      <div className='adventure-title'>
        <h1>Costco Run</h1>
      </div>
      <div className='page-content-wrapper'>
        <div className='user-stats-wrapper'>
          <div className='user-stats-title'>Your Stats</div>
          <div className='health-wrapper'>
            <div className='health-title'>Total Health:</div>
            <div className='health-stat'>
              {health}%{/* {player.health}% */}
            </div>
          </div>
          <div className='security-wrapper'>
            <div className='security-title'>Security Awareness:</div>
            <div className='security-stat'>
              {security}%{/* {player.security}% */}
            </div>
          </div>
          <div className='points-wrapper'>
            <div className='points-title'>Points in your cart:</div>
            <div className='points-stat'>
              {points}
              {/* {player.points} */}
            </div>
          </div>
          <div className='family-wrapper'>
            <div className='family-title'>Family Members:</div>
            <div className='family-stat'>
              {family}
              {/* {player.family} */}
            </div>
          </div>
        </div>

        <div className='content-wrapper'>
          <div className='adventure-content'>
            {/* You drive your prius into the madhouse that is the Costco parking
            lot. You notice an old man rip the nose ring right out of a young
            hipster girl's nostril as they wrestled over a can of SPAM. "Ah,
            Costco," your spouse says as they lean over to grab your hand from
            the passenger seat, "the great equalizer." You nod your head in a
            agreement. "Where should we park?" you ask. "There's a spot!" Your
            youngest child adds from the backseat. "No, we shouldn't park
            there," your spouse adds, "that's a handicapped spot. We'd better
            park out in the boonies." <br />
            <br /> Where would you like to park? */}
            {currentAdventure.description}
            <br />
            <br />
            What would you like to do?
          </div>
          <div className='adventure-choice-button-wrapper'>
            <Link
              to={{
                pathname: `/results/${currentAdventure.buttonOnePath}`,
                state: {
                  health: health,
                  security: security,
                  points: points,
                  family: family,
                },
              }}
              className='adventure-button'
            >
              {currentAdventure.buttonOneName}
            </Link>
            <Link
              to={{
                pathname: `/results/${currentAdventure.buttonTwoPath}`,
                state: {
                  health: health,
                  security: security,
                  points: points,
                  family: family,
                },
              }}
              className='adventure-button'
            >
              {currentAdventure.buttonTwoName}
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='logo'>
        <img src='https://costco-adventure.s3-us-west-1.amazonaws.com/Screenshot_2020-05-15+Costco+Survivor.png'/>
      </div> */}
    </div>
  );
}
