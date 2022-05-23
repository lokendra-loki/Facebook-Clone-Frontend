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

    //Create
    case "CREATE_FEED_POSTS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_FEED_POSTS_SUCCESS":
      return {
        feedPosts: [...state.feedPosts, action.payload], //adding new post//...state.feedPosts means all old posts
        isFetching: false,
        error: false,
      };

    case "CREATE_FEED_POSTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Delete
    case "DELETE_FEED_POST_START":
      return {
        ...state, //at the beginning we wont change anything so we can use the old state
        isFetching: true,
        error: false,
      };

    case "DELETE_FEED_POST_SUCCESS":
      return {
        feedPosts: state.feedPosts.filter(
          (feedPost) => feedPost.id !== action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "DELETE_FEED_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default FeedPostsReducer;
