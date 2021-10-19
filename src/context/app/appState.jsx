import { useReducer } from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'

const AppState = ({ children }) => {
  const intialState = {}

  const [state, dispatch] = useReducer(intialState, appReducer)

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export default AppState
