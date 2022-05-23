export const GetFeedPostsStart = () => ({
  type: "GET_FEED_POSTS_START",
});

export const GetFeedPostsSuccess = (feedPosts) => ({
  type: "GET_FEED_POSTS_SUCCESS",
  payload: feedPosts,
});

export const GetFeedPostsFailure = () => ({
  type: "GET_FEED_POSTS_FAILURE",
});

//Delete
export const DeleteFeedPostStart = () => ({
  type: "DELETE_FEED_POST_START",
});

export const DeleteFeedPostSuccess = (id) => ({
  type: "DELETE_FEED_POST_SUCCESS",
  payload: id,
});

export const DeleteFeedPostFailure = () => ({
  type: "DELETE_FEED_POST_FAILURE",
});
