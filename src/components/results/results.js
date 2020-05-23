import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { UserContext } from "../context/context";
import Title from "../title/title";

export default function Results(props) {
  const { player } = useContext(UserContext);

  const [health, setHealth] = useState(props.location.state.health);
  const [points, setPoints] = useState(props.location.state.points);
  const [family, setFamily] = useState(props.location.state.family);
  const [security, setSecurity] = useState(props.location.state.security);
  const [path, setPath] = useState();
  const [currentResult, setCurrentResult] = useState({});

  let slug = props.match.params.slug;

  console.log("health", health);
  console.log("health", props.location.state.health);
  console.log("current adventure", currentResult);

  useEffect(() => {
    axios
      .get(`https://jel-text-adventure-api.herokuapp.com/result/${slug}`)
      .then((response) => {
        setCurrentResult(response.data);
        // let currentResult = response.data;
        setPath(`/adventure/${response.data.resultPath}`);

        setHealth(props.location.state.health + Number(response.data.health));
        setPoints(props.location.state.points + Number(response.data.points));
        setFamily(props.location.state.family + Number(response.data.family));
        setSecurity(
          props.location.state.security + Number(response.data.security)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log("health2", health);

  // setHealth(props.location.state.health + Number(currentResult.health));
  // setPoints(props.location.state.points + Number(currentResult.points));
  // setFamily(props.location.state.family + Number(currentResult.family));
  // setSecurity(props.location.state.security + Number(currentResult.security));
  // }, [currentResult]);

  useEffect(
    () => {
      if (health <= 0) {
        setPath("/sick");
      }
      if (security >= 100) {
        setPath("/kicked-out");
      }
    },
    [health],
    [security],
    [family]
  );

  console.log(props.location.state);

  return (
    <div className='adventure-page-wrapper'>
      <Title />
      <div className='page-content-wrapper'>
        <div className='user-stats-wrapper'>
          <div className='user-stats-title'>Your Stats</div>
          <div className='health-wrapper'>
            <div className='health-title'>Total Health:</div>
            <div className='health-stat'>
              {/* health */}
              {health}%
            </div>
          </div>
          <div className='security-wrapper'>
            <div className='security-title'>Security Awareness:</div>
            <div className='security-stat'>
              {/* Security */}
              {security}%
            </div>
          </div>
          <div className='points-wrapper'>
            <div className='points-title'>Points in your cart:</div>
            <div className='points-stat'>
              {/* points */}
              {points}
            </div>
          </div>
          <div className='family-wrapper'>
            <div className='family-title'>Family Members:</div>
            <div className='family-stat'>
              {/* family */}
              {family}
            </div>
          </div>
        </div>

        <div className='content-wrapper'>
          <div className='adventure-content'>{currentResult.resultDesc}</div>
          <div className='adventure-choice-button-wrapper'>
            <Link
              to={{
                pathname: path,
                state: {
                  health: health,
                  family: family,
                  points: points,
                  security: security,
                },
              }}
              className='adventure-button'
            >
              Continue on
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='logo'>
        <img src='https://costco-adventure.s3-us-west-1.amazonaws.com/Screenshot_2020-05-15+Costco+Survivor.png' />
      </div> */}
    </div>
  );
}
