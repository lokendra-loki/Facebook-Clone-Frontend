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
