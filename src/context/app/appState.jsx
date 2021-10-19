import { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import { SET_ACTIVE_PRODUCT } from './appTypes'

const AppState = ({ children }) => {
  const initialState = {
    activeProduct: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const setActiveProduct = id => {
    dispatch({
      type: SET_ACTIVE_PRODUCT,
      payload: id,
    })
  }

  return (
    <appContext.Provider value={{ activeProduct: state.activeProduct, setActiveProduct }}>
      {children}
    </appContext.Provider>
  )
}

export default AppState
