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

//Delete
const deleteFeedPost = async (id, dispatch) => {
  dispatch({ type: "DELETE_FEED_POST_START" });
  try {
    await axios.delete("/posts/delete/" + id);
    dispatch({ type: "DELETE_FEED_POST_SUCCESS", payload: id });
  } catch (error) {}
};

//export
export default getFeedPosts;
export { deleteFeedPost };
