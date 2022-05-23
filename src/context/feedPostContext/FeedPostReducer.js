const FeedPostsReducer = (state, action) => {
  switch (action.type) {
    case "GET_FEED_POSTS_START":
      return {
        feedPosts: [],
        isFetching: true,
        error: false,
      };

    case "GET_FEED_POSTS_SUCCESS":
      return {
        feedPosts: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_FEED_POSTS_FAILURE":
      return {
        feedPosts: [],
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default FeedPostsReducer;
