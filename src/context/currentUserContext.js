import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { AuthContext } from "./authContext/AuthContext";

//context
const CurrentUserContext = createContext();

//context provider
export function CurrentUserContextProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get(`/users/get/${user._id}`);
        setCurrentUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentUser();
  }, [user?._id]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
