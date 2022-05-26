const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    //Logout
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    //follow
    // case "FOLLOW":
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       followings: [...state.user.followings, action.payload],
    //     },
    //   };

    // case "UNFOLLOW":
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       followings: state.user.followings.filter(
    //         (following) => following._id !== action.payload
    //       ),
    //     },
    //   };

    default:
      return state;
  }
};

export default AuthReducer;
