import React, { useContext, useRef } from 'react'
import "./login.scss"
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'


function Login() {



    const email = useRef()
    const password = useRef()

    const { dispatch, isFetching, error } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    // console.log(user)





    return (
        <div className='login'>
            <div className="loginWrapper">

                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
                </div>

                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input placeholder="Email" type="email" className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" required minLength={6} ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}  >{isFetching ? "loading" : "Login"}</button>
                        <span className="forgot">Forgot Password ?</span>

                        <Link to ={"/register"}>
                            <button className="registerButton">Register</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
















//CLIENT ONLY==========================>
// import React from 'react'
// import "./login.scss"


// function Login() {
//     return (
//         <div className='login'>
//             <div className="loginWrapper">

//                 <div className="loginLeft">
//                     <h3 className="loginLogo">Facebook</h3>
//                     <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
//                 </div>

//                 <div className="loginRight">
//                     <form className="loginBox" >
//                         <input placeholder="Email" type="email" className="loginInput" />
//                         <input placeholder="Password" type="password" className="loginInput" required minLength={6} />
//                         <button className="loginButton" type="submit">Login</button>
//                         <span className="forgot">Forgot Password ?</span>
//                         <button className="registerButton">Register</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

























// import React from 'react'
// import "./login.scss"
// // import { CircularProgress } from '@material-ui/core'
// import { useRef } from 'react'
// import { loginCall } from '../../apiCalls'
// import { AuthContext } from '../../context/AuthContext'
// import { useContext } from 'react'

// function Login() {
//     //sending data to the server
//     const email = useRef()
//     const password = useRef()

//     //hook
//     const [user, isFetching, error, dispatch] = useContext(AuthContext)

//     const handleClick = (e) => {
//         e.preventDefault()
//         loginCall({ email: email.current.value, password: password.current.value }, dispatch)
//         // console.log(email.current.value)
//     }
//     console.log(user)

//     return (
//         <div className='login'>
//             <div className="loginWrapper">

//                 <div className="loginLeft">
//                     <h3 className="loginLogo">Facebook</h3>
//                     <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
//                 </div>

//                 <div className="loginRight">
//                     <form className="loginBox" onSubmit={handleClick} >
//                         <input placeholder="Email" type="email" className="loginInput" required ref={email} />
//                         <input placeholder="Password" type="password" className="loginInput" required minLength={6} ref={password} />
//                         <button className="loginButton" type="submit">{isFetching ? "loading" : "Login"}</button>
//                         <span className="forgot">Forgot Password ?</span>
//                         <button className="registerButton">Register</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login
