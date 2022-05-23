import axios from "axios";

//Get all
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
  } catch (error) {
    dispatch({ type: "DELETE_FEED_POST_FAILURE" });
  }
};

//Create
const createFeedPost = async (feedPost, dispatch) => {
  dispatch({ type: "CREATE_FEED_POST_START" });
  try {
    await axios.post("/posts/create", feedPost);
    dispatch({ type: "CREATE_FEED_POST_SUCCESS", payload: feedPost });
  } catch (error) {
    dispatch({ type: "CREATE_FEED_POST_FAILURE" });
  }
};

//export
export default getFeedPosts;
export { deleteFeedPost };
export { createFeedPost };
