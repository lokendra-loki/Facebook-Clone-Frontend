import React from 'react'
import "./login.scss"
// import { CircularProgress } from '@material-ui/core'
import { useRef } from 'react'

function Login() {
    //sending data to the server
    const email = useRef()
    const password = useRef()


    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value)
        console.log(password.current.value)
    }


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
                    <form className="loginBox" onSubmit={handleClick} >
                        <input placeholder="Email" type="email" className="loginInput" required ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" required minLength={6} ref={password} />
                        <button className="loginButton" type="submit">Login</button>
                        <span className="forgot">Forgot Password ?</span>
                        <button className="registerButton">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login