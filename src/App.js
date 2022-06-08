import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/setting/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookMark from "./pages/bookMark/BookMark";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> :<Login/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/settings/:id" element={user && <Setting />} />
        <Route exact path="/bookMark/:id" element={user && <BookMark />} />
      </Routes>
    </Router>
  );
}

export default App;
