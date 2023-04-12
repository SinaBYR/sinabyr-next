import { useContext } from "react"
import { DispatchContext, StateContext } from '../app/auth-provider';

export function useAuth() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return [state, dispatch];
}