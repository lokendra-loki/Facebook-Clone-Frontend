import React from 'react'
import "./register.scss"

function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Create Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign up</button>
                        <span className="forgot">Already Have an Account ? SignIn</span>
                        {/* <button className="registerButton">Create a New Account</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register