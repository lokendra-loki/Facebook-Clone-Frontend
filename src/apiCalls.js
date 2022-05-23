import axios from "axios";

//Login  Calls
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    //if it is successful then dispatch the success state
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE" });
  }
};
