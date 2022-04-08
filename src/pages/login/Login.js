import React from 'react'
import "./login.scss"
import { useRef, useContext } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'

function Login() {
    //useRef Hook
    const email = useRef()
    const password = useRef()

    const { user, isFetching, error, dispatch } = useContext(AuthContext)


    //handleClick function
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)

    }
    console.log(user)



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

                        <button className="loginButton" type="submit" >
                            {isFetching ? < CircularProgress Size="15px" className="circularProgress" /> : "Log In"}
                        </button>
                        <span className="forgot">Forgot Password ?</span>
                        <button className="registerButton">
                            {isFetching ? < CircularProgress Size="15px" className="circularProgress" /> : "Create a New Account"}

                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login