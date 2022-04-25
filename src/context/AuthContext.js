import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';


const INITIAL_STATE = {
  user: {
    _id: "624da824013d67d405ab116e",
    username: "lokendra",
    email: "lokendra@gmail.com",
    password: "$2b$10$6KYBE63GQzLuoj06kcDxC.cVrmuBzY0Zv5ovB3GSy3Mfaef4HT.ly",
    profilePicture: "https://images.unsplash.com/photo-1650763346440-d648b8f9481b?ixlib=rb-...",
    coverPicture: "https://kaboompics.com/cache/4/4/b/9/4/44b94d0562c2b5678cba32c2af5180c...",
    followers: Array,
    followings: Array,
    isAdmin: false,
    desc: "This is the description from api",
    city: "Kathmandu",
    from: "kailali",
    relationship: 2,
  },

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