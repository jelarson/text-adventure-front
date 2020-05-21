import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [player, setState] = useState({
    health: 100,
    family: 4,
    points: 0,
    security: 0
  });
  // const setPlayer = (player) => {
  //   setState({
  //     health: player.health,
  //     family: player.family,
  //     points: player.points,
  //     security: player.security
  //   });
  // };
  const actions = {
    setHealth: (amt) => setState({...state, health: state.person.health + amt }),
    setPoints: (amt) => setState({...state, points: state.person.points + amt }),
    setSecurity: (amt) => setState({...state, security: state.person.security + amt }),
    setFamily: (amt) => setState({...state, family: state.person.family + amt })
  }
  return (
    <UserContext.Provider value={{ player, actions }}>
      {children}
    </UserContext.Provider>
  );
};
