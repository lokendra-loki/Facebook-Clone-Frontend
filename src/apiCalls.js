import axios from 'axios';

//Login Api Calls
export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    
    try {
        const res = await axios.post("/auth/login", userCredential)
        //if it is successful then we will dispatch the success
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error })

    }
}