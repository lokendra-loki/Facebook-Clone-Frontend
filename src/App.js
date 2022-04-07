import React from 'react'
import Home from './pages/home/Home'
import Register from './components/register/Register'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'


//React-Router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        {/* username use garera profile page ma janxau we are not going to profile page directly */}

      </Routes>
    </Router>
  )
}

export default App