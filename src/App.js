import React from "react";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/setting/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookMark from "./pages/bookMark/BookMark";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/settings/:id" element={<Setting />} />
        <Route exact path="/bookMark/:id" element={<BookMark />} />
      </Routes>
    </Router>
  );
}

export default App;
