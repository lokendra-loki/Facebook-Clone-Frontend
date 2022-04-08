import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';


//At the beginning we are not login
const INITIAL_STATE = {
  user: {
    _id:"624da824013d67d405ab116e",
    username: "lokendra",
    email: "lokendra@gmail.com",
    password: "$2b$10$6KYBE63GQzLuoj06kcDxC.cVrmuBzY0Zv5ovB3GSy3Mfaef4HT.ly",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: []

  },

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
