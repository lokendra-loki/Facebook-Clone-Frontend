import React from 'react'
import "./login.scss"

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">

                {/* Login Left Side--------------------------------*/}
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
                </div>

                {/* LoginRight Side----------------------------------*/}
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="forgot">Forgot Password ?</span>
                        <button className="registerButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login