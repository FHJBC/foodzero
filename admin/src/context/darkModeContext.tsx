import { createContext, Dispatch, ReactNode, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"

interface InitialState {
  darkMode: boolean,
  dispatch?: Dispatch<{type: any, payload?: any}>
}

const INITIAL_STATE: InitialState = {
  darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )
}
