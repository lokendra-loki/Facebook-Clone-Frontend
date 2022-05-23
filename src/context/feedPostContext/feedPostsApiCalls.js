import axios from "axios";

const getFeedPosts = async (dispatch) => {
  dispatch({ type: "GET_FEED_POSTS_START" });
  try {
    const res = await axios.get("/posts/getAll");
    dispatch({ type: "GET_FEED_POSTS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_FEED_POSTS_FAILURE" });
  }
};

//export
export default getFeedPosts;
