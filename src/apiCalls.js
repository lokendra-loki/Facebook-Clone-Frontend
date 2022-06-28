import axios from "axios";
import { toast } from "react-toastify";

//Login  Calls
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    toast.success("Login Successful", { theme: "colored" });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE" });
    toast.error("Credential didn't matched", { theme: "colored" });
    console.log({ msg: "Email or Password wrong", error });
  }
};
