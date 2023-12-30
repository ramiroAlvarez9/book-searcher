import React from "react";


// Colors 
export const colorsForApp  ={
  primaryColor: '#6904a0',
  secondary: '#d6d600',
}

/*

* Default application state

*/
const defaultState = {
  user: {},
  updateState: (newState) => {},
};

/*
    * Creating the Application state context for the provider
*/
export const UserContext = React.createContext(defaultState);