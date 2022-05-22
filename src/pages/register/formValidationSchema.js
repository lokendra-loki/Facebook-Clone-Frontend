// import * as yup from "yup";

// const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

// export const formValidationSchema = yup.object().shape({
//   fullName: yup
//     .string()
//     .required("Full name is required")
//     .min(6, "Full name must be at least 6 characters long")
//     .max(50, "Full name must be less than 50 characters long")
//     .matches(/^[a-zA-Z ]+$/, "Full name must contain only letters")
//     .trim(),

//   email: yup
//     .string()
//     .email("Invalid email")
//     .required("Email is required")
//     .min(10, "Email must be at least 10 characters")
//     .max(50, "Email must be less than 50 characters"),

//   password: yup
//     .string()
//     .required("Password is required")
//     .min(5, "Password must be at least 5 characters long")
//     .max(20, "Password must be less than 20 characters long")
//     .matches(
//       passwordRule,
//       "Password must contain at least one number, one lowercase and one uppercase letter"
//     ),

//   confirmPassword: yup
//     .string()
//     .required("Confirm password is required")
//     .oneOf([yup.ref("password"), null], "Passwords must match"),
// });

import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be less than 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric")
    .trim()
    .lowercase(),

  email: yup
    .string()
    .email("Please Enter valid email")
    .required("email is requires")
    .min(10)
    .max(50),

  password: yup
    .string()
    .required("Password is required")
    .matches(passwordRule, { message: "Please enter a stronger password" }),

  confirmPassword: yup
    .string()
    .required("Confirm Password required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
