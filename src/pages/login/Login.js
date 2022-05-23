import React, { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../apiCalls";

function Login() {
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    navigate("/");
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDescription">
            Connect with friends and the world around you on Facebook
          </span>
        </div>

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Login
            </button>
            <span className="forgot">Forgot Password ?</span>

            <Link to={"/register"}>
              <button className="registerButton">Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
