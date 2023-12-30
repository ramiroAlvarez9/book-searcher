import React, { useState } from "react";
import { AppState, UserContext } from "./colors-context";

/**
 * The main context provider 
 */
export const UserContextProvider  = (
  props
)  => {
  
  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState({});

  /**
   * Declare the update state method that will handle the state values
   */
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };

  /**
   * Context wrapper that will provider the state values to all its children nodes
   */
  return (
    <UserContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </UserContext.Provider>
  );
};