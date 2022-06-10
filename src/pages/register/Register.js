import React, { useContext } from "react";
import { registerSchema } from "./formValidationSchema";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import "./register.css";
const { useFormik } = require("formik");

function Register() {
  const { isFetching, dispatch } = useContext(AuthContext);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      actions.resetForm();
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

  return (
    <div className="registerPage">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="loginLogo">Facebook</h3>
        <span className="loginDescription">
          Connect with friends and the world around you on Facebook .
        </span>
        <label htmlFor="username" className="registerInputLabel">
          Full Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="Full Name"
          value={values.username}
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur} //blur when leave the input
          className={
            errors.username && touched.username
              ? "input-error"
              : "registerInputs"
          }
        />
        {errors.username && touched.username && (
          <p className="error">{errors.username}</p>
        )}

        <label htmlFor="email" className="registerInputLabel">
          Email
        </label>
        <input
          // type="email"
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
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

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
            errors.password && touched.password
              ? "input-error"
              : "registerInputs"
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
          {isFetching ? "Registering..." : "Register"}
        </button>
        <span className="orLogin">Or Login ?</span>

        <Link to="/login" className="link">
          <button className=" toLoginBut">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
