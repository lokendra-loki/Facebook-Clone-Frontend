// import React, { useEffect, useState } from "react";
// import "./post.scss";
// import { MoreVert } from "@material-ui/icons";
// import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

// function Post({ post }) {
//   const { user: currentUser } = useContext(AuthContext);

//   //Like dislike handler--------------------->
//   const [like, setLike] = useState(post.likes.length); //likes array ko length
//   const [isLiked, setIsLikeed] = useState(false);

//   const likeHandler = () => {
//     try {
//       axios.put("/posts/" + post._id / like, { userId: currentUser._id }); //yi id { userId: user._id } le like garey ko
//     } catch (error) {}

//     //logic
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLikeed(!isLiked);
//   };

//   //----------------------------------------->
//   //Fetching user according to th post. post ko userId bata user fetch garey ko
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await axios.get(`/users/?userId=${post.userId}`); //post ko userId bata user fetch garey ko
//       console.log(res.data);
//       setUser(res.data);
//     };
//     fetchUser();
//   }, [post.userId]);

//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <Link to={`profile/${user.username}`}>
//               <img
//                 className="postProfileImg"
//                 src={user.profilePicture || "/assets/person/default.jpeg"}
//                 alt=""
//               />
//             </Link>

//             <Link to={`profile/${user.username}`} className="link">
//               <span className="postUsername">{user.username}</span>
//             </Link>

//             <span className="postDate">{format(post.createdAt)} </span>
//           </div>

//           <div className="postTopRight">
//             <MoreVert />
//           </div>
//         </div>

//         <div className="postCenter">
//           <span className="postText">{post.desc}</span>
//           <img
//             className="postImg"
//             src={post.img || "/assets/post/default.jpeg"}
//             alt=""
//           />
//         </div>

//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img
//               className="likeIcon"
//               src="/assets/like.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <img
//               className="likeIcon"
//               src="/assets/heart.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <span className="postLikeCounter"> {like} people like it</span>
//           </div>

//           <div className="postBottomRight">
//             <span className="postCommentText">comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Post;

//  CLIENT SIDE ONLY==========================>
import React, { useContext, useEffect } from "react";
import "./post.scss";
import { MoreVert } from "@material-ui/icons";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import getFeedPosts, {
  deleteFeedPost,
} from "../../context/feedPostContext/feedPostsApiCalls";
import { format } from "timeago.js";

function Post() {
  //Fetch all feedPosts
  const { feedPosts, dispatch } = useContext(FeedPostsContext);
  useEffect(() => {
    getFeedPosts(dispatch);
  }, [dispatch]);
  // console.log(feedPosts);

  //Delete feedPost
  const handlePostDelete = (id) => {
    deleteFeedPost(id, dispatch);
    window.location.reload();
  };

  return (
    <>
      {feedPosts.map((feedPost, index) => (
        <div key={index} className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src="assets/person/7.jpeg"
                  alt=""
                />
                <span className="postUsername">{feedPost.username}</span>
                <span className="postDate">{format(feedPost.createdAt)}</span>
              </div>

              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>

            <div className="postCenter">
              <span className="postText">{feedPost.desc}</span>
              <img className="postImg" src="assets/post/10.jpeg" alt="" />
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter"> 9 people like it</span>
              </div>
              <button onClick={() => handlePostDelete(feedPost._id)}>
                delete
              </button>
              <div className="postBottomRight">
                <span className="postCommentText">45 comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
