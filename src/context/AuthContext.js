import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';


//At the beginning we are not login
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};


//Create the context (AuthContext)
export const AuthContext = createContext(INITIAL_STATE);


//Create the provider (AuthContextProvider) and pass the reducer and the initial state
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  return (
    <AuthContext.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch,
    }}>{children}</AuthContext.Provider>

  )
}
