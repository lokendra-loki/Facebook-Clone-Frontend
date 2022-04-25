import React, { useRef } from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Register() {

    //for user register------------
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()


    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setValueCustomValidity(" password didn't match")//hamro custom validation
        } else {
            const user = { username: username.current.value, email: email.current.value, password: password.current.value }
            try {
                await axios.post("/auth/register", user)
                //if everything is ok
                // window.location.href = "/login"
                navigate("/login")
            } catch (error) {
                console.log(error)
            }
        }
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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required className="loginInput" ref={username} />

                        <input placeholder="Email" required type="email" minLength="6" className="loginInput" ref={email} />

                        <input placeholder="Create Password" type="password" required className="loginInput" ref={password} />

                        <input placeholder="Confirm Password" type="password" required className="loginInput" ref={passwordAgain} />

                        <button className="loginButton" type="submit" >Sign up</button>
                        <span className="forgot">Already Have an Account ? LogIn</span>

                        <Link to={"/login"}>
                            <button className="registerButton">LogIn</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register




























// import React from 'react'
// import "./register.scss"
// import { useRef } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'





// function Register() {

//     const username = useRef()
//     const email = useRef()
//     const password = useRef()
//     const passwordAgain = useRef()

//     const navigate =useNavigate ()



//     const handleClick = async (e) => {
//         e.preventDefault()

//         if (passwordAgain.current.value !== password.current.value) {
//             passwordAgain.current.setCustomValidity("password dont match")
//         } else {
//             const user = {
//                 username: username.current.value,
//                 email: email.current.value,
//                 password: password.current.value
//             }

//             try {
//                   await axios.post("/auth/register", user)
//                     navigate("/login")

//             } catch (err) {
//                 console.log(err);

//             }

//         }
//     }






//     return (
//         <div className='login'>
//             <div className="loginWrapper">

//                 {/* Login Left Side--------------------------------*/}
//                 <div className="loginLeft">
//                     <h3 className="loginLogo">Facebook</h3>
//                     <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
//                 </div>

//                 {/* LoginRight Side----------------------------------*/}
//                 <div className="loginRight">
//                     <form className="loginBox" onSubmit={handleClick}>
//                         <input placeholder="Username" required className="loginInput" ref={username} />

//                         <input placeholder="Email" required type="email" minLength="6" className="loginInput" ref={email} />

//                         <input placeholder="Create Password" type="password" required className="loginInput" ref={password} />

//                         <input placeholder="Confirm Password" type="password" required className="loginInput" ref={passwordAgain} />

//                         <button className="loginButton" type="submit" >Sign up</button>
//                         <span className="forgot">Already Have an Account ? LogIn</span>

//                         <Link to={"/login"}>
//                         <button className="registerButton">LogIn</button>
//                         </Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register


//CLIENT ONLY====================>
// import React from 'react'
// import "./register.scss"
// import { Link } from 'react-router-dom'

// function Register() {
//     return (
//         <div className='login'>
//             <div className="loginWrapper">

//                 {/* Login Left Side--------------------------------*/}
//                 <div className="loginLeft">
//                     <h3 className="loginLogo">Facebook</h3>
//                     <span className="loginDescription">Connect with friends and the world around you on Facebook</span>
//                 </div>

//                 {/* LoginRight Side----------------------------------*/}
//                 <div className="loginRight">
//                     <form className="loginBox" >
//                         <input placeholder="Username" required className="loginInput" />

//                         <input placeholder="Email" required type="email" minLength="6" className="loginInput" />

//                         <input placeholder="Create Password" type="password" required className="loginInput" />

//                         <input placeholder="Confirm Password" type="password" required className="loginInput" />

//                         <button className="loginButton" type="submit" >Sign up</button>
//                         <span className="forgot">Already Have an Account ? LogIn</span>

//                         <Link to={"/login"}>
//                             <button className="registerButton">LogIn</button>
//                         </Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register
