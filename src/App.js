import React from 'react'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'





//React-Router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

  
} from "react-router-dom";


function App() {

  //context bata user calll garey because context ma user call garisakya xau
  const { user } = useContext(AuthContext)



  return (
    <Router>
      <Routes>

        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/register" element={ user ? <Navigate to="/" /> :   <Register />} />
        <Route exact path="/profile/:username" element={<Profile />} />
        {/* username use garera profile page ma janxau we are not going to profile page directly */}

      </Routes>
    </Router>
  )
}

export default App