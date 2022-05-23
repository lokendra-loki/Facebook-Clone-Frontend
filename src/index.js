import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { FeedPostsContextProvider } from "./context/feedPostContext/FeedPostContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedPostsContextProvider>
        <App />
      </FeedPostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
