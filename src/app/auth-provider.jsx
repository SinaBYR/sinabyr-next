'use client';

import { useReducer, createContext } from "react";
import { initialState, reducer } from '../store/reducer';

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}