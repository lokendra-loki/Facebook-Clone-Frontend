import { createContext, useReducer } from "react";
import FeedPostsReducer from "./FeedPostReducer";

const INITIAL_STATE = {
  feedPosts: [],
  isFetching: false,
  error: false,
};

//context
export const FeedPostsContext = createContext(INITIAL_STATE);

//contextProvider
export const FeedPostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FeedPostsReducer, INITIAL_STATE);

  return (
    <FeedPostsContext.Provider
      value={{
        feedPosts: state.feedPosts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FeedPostsContext.Provider>
  );
};
