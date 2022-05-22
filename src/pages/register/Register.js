// import React from "react";
// import "./register.scss";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         {/* Login Left Side--------------------------------*/}
//         <div className="loginLeft">
//           <h3 className="loginLogo">Facebook</h3>
//           <span className="loginDescription">
//             Connect with friends and the world around you on Facebook
//           </span>
//         </div>

//         {/* LoginRight Side----------------------------------*/}
//         <div className="loginRight">
//           <form className="loginBox">
//             <input placeholder="Username" required className="loginInput" />

//             <input
//               placeholder="Email"
//               required
//               type="email"
//               minLength="6"
//               className="loginInput"
//             />

//             <input
//               placeholder="Create Password"
//               type="password"
//               required
//               className="loginInput"
//             />

//             <input
//               placeholder="Confirm Password"
//               type="password"
//               required
//               className="loginInput"
//             />

//             <button className="loginButton" type="submit">
//               Sign up
//             </button>
//             <span className="forgot">Already Have an Account ? LogIn</span>

//             <Link to={"/login"}>
//               <button className="registerButton">LogIn</button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import React, { useContext } from "react";
// import "./register.scss";
// import { Link } from "react-router-dom";
// import { formValidationSchema } from "./formValidationSchema";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";
// const { useFormik } = require("formik");

// function Register() {
//   const { user, dispatch } = useContext(AuthContext);

//   const onSubmit = async (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     console.log("submitted");
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/register", {
//         fullName: values.fullName,
//         email: values.email,
//         password: values.password,
//       });
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//       await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
//       actions.resetForm();
//       console.log(res.data);
//       window.location.replace("/");
//     } catch (error) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     // isSubmitting,
//   } = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: formValidationSchema,
//     onSubmit,
//   });
//   console.log(errors);

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         {/* Login Left Side--------------------------------*/}
//         <div className="loginLeft">
//           <h3 className="loginLogo">Facebook</h3>
//           <span className="loginDescription">
//             Connect with friends and the world around you on Facebook
//           </span>
//         </div>

//         {/* LoginRight Side----------------------------------*/}
//         <div className="loginRight">
//           <form className="loginBox" onSubmit={handleSubmit}>
//             {/* Full Name----------------- */}
//             <input
//               type="text"
//               placeholder="Full Name"
//               required
//               value={values.fullName}
//               className={
//                 errors.fullName && touched.fullName
//                   ? "input-error"
//                   : "registerInputs"
//               }
//               autocomplete="off"
//               onChange={handleChange}
//               onBlur={handleChange}
//             />
//             {errors.fullName && touched.fullName && (
//               <p className="error">{errors.fullName}</p>
//             )}

//             {/* Email----------------- */}
//             <input
//               placeholder="Email"
//               required
//               type="email"
//               minLength="6"
//               value={values.email}
//               autocomplete="off"
//               className={
//                 errors.email && touched.email ? "input-error" : "registerInputs"
//               }
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && touched.email && (
//               <p className="error">{errors.email}</p>
//             )}

//             {/* Password----------------- */}
//             <input
//               placeholder="Create Password"
//               type="password"
//               value={values.password}
//               autoComplete="off"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.password && touched.password
//                   ? "input-error"
//                   : "registerInputs"
//               }
//             />
//             {errors.password && touched.password && (
//               <p className="error">{errors.password}</p>
//             )}

//             <input
//               placeholder="Confirm Password"
//               type="password"
//               value={values.confirmPassword}
//               autoComplete="off"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.confirmPassword && touched.confirmPassword
//                   ? "input-error"
//                   : "registerInputs"
//               }
//             />
//             {errors.confirmPassword && touched.confirmPassword && (
//               <p className="error">{errors.confirmPassword}</p>
//             )}

//             <button className="loginButton" type="submit">
//               Sign up
//             </button>
//             <span className="forgot">Already Have an Account ? LogIn</span>

//             <Link to={"/login"}>
//               <button className="registerButton">LogIn</button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

//========================================
import React, { useContext } from "react";
import { registerSchema } from "./formValidationSchema";
import axios from "axios";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
const { useFormik } = require("formik");

function Register() {
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
      actions.resetForm();
      console.log(res.data);
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="username" className="registerInputLabel">
        Username
      </label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={values.username}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur} //blur when leave the input
        className={
          errors.username && touched.username ? "input-error" : "registerInputs"
        }
      />
      {errors.username && touched.username && (
        <p className="error">{errors.username}</p>
      )}

      <label htmlFor="email" className="registerInputLabel">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={values.email}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? "input-error" : "registerInputs"
        }
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password" className="registerInputLabel">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={values.password}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.password && touched.password ? "input-error" : "registerInputs"
        }
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword" className="registerInputLabel">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
        value={values.confirmPassword}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword
            ? "input-error"
            : "registerInputs"
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button
        className="registerSubmitBut"
        type="submit"
        disabled={isSubmitting}
      >
        Register
      </button>
    </form>
  );
}

export default Register;
