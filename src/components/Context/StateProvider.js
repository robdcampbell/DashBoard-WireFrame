import React, { createContext, useContext, useReducer } from "react";

// Prepares the Data Layer
export const StateContext = createContext();

// The StateProver "Wrapper" - wraps the app to provide state
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
