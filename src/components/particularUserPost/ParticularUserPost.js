import React, { useContext } from "react";
import "./particularUserPost.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import { deleteFeedPost } from "../../context/feedPostContext/feedPostsApiCalls";
import { format } from "timeago.js";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { useAPI } from "../../context/currentUserContext";

function ParticularUserPost({ particularPosts }) {
  //Fetch all feedPosts
  const { dispatch } = useContext(FeedPostsContext);
  const { user } = useContext(AuthContext);
  const { currentUser } = useAPI();

  //Delete feedPost
  const handlePostDelete = (id) => {
    deleteFeedPost(id, dispatch);
    window.location.reload();
  };

  //Bookmark
  const saveBookmarkPost = async (id) => {
    try {
      await axios.put(`/users/bookmark/${id}`, {
        userId: user?._id,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Like and dislike
  const handleLike = async (id) => {
    try {
      await axios.put(`/posts/like/${id}`, {
        userId: user?._id,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={particularPosts?.profilePic}
                alt=""
              />
              <span className="postUsername">{particularPosts?.username}</span>
              <span className="postDate">
                {format(particularPosts?.createdAt)}
              </span>
            </div>

            <div className="postTopRight">
              <MoreHorizIcon />
            </div>
          </div>

          <div className="postCenter">
            <span className="postText">{particularPosts?.desc}</span>
            <img className="postImg" src={particularPosts?.img} alt="" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="/assets/like.png"
                alt=""
                onClick={() => handleLike(particularPosts?._id)}
              />
              <span className="postLikeCounter">
                {particularPosts?.likes?.length} Likes
              </span>
            </div>
            <button
              className="postDeleteBut"
              onClick={() => handlePostDelete(particularPosts?._id)}
            >
              delete
            </button>

            {particularPosts.userID !== user._id && (
              <button
                className="bookmark"
                onClick={() => saveBookmarkPost(particularPosts?._id)}
              >
                {currentUser.bookmarks?.includes(particularPosts?._id)
                  ? "Saved"
                  : "Bookmark"}
              </button>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ParticularUserPost;
