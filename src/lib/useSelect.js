import { useContext } from "react"
import { DispatchContext, StateContext } from '../app/auth-provider';

export function useSelect() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return [state, dispatch];
}