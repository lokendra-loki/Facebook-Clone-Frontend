import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../apiCalls";
import "./login.scss";

function Login() {
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      loginCall({ email, password }, dispatch);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
            <span className={!email ? "activeErrorStarSpan" : " errorStarSpan"}>
              *
            </span>
            <input
              placeholder="Email"
              className="loginInput"
              autoSave="on"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            />

            <span
              className={!password ? "activeErrorStarSpan" : " errorStarSpan"}
            >
              *
            </span>
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className={error ? "activeErrorSpan" : "errorSpan"}>
              Email or Password wrong
            </span>

            <button className="loginButton" type="submit">
              {isFetching ? "Loading..." : "Login"}
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
