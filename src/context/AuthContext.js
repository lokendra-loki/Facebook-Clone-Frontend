import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';


const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
}


//context
export const AuthContext = createContext(INITIAL_STATE)


//contextProvider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  return (
    <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}