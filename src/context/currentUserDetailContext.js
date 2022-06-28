import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { AuthContext } from "./authContext/AuthContext";

//context
const CurrentUserDetailContext = createContext();

//context provider
export function CurrentUserDetailContextProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [currentUserDetail, setCurrentUserDetail] = useState({});
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.post("/userDetail/userDetailData", {
          userID: user?._id,
        });
        setCurrentUserDetail(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentUser();
  }, [user?._id, user?.others?._id]);

  return (
    <CurrentUserDetailContext.Provider
      value={{
        currentUserDetail,
      }}
    >
      {children}
    </CurrentUserDetailContext.Provider>
  );
}

export function useAPI1() {
  const context = useContext(CurrentUserDetailContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
