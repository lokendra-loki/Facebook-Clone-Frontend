import React from 'react'
import "./login.scss"
import { useRef } from 'react'

function Login() {
    //useRef Hook
    const email = useRef()
    const password = useRef()


    //handleClick function
    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value )

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
                    {/* onSubmmit ma handleFunction call hunxa */}
                    <form className="loginBox" onSubmit={handleClick}  >
                        <input placeholder="Email"
                            type="email" required
                            className="loginInput"
                            ref={email} />


                        <input placeholder="Password"
                            type="password"
                            minLength={6}
                            required className="loginInput"
                            ref={password} />

                        <button className="loginButton">Log In</button>
                        <span className="forgot">Forgot Password ?</span>
                        <button className="registerButton">Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login