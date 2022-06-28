import React, { useContext, useEffect, useState } from "react";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import { AuthContext } from "../../context/authContext/AuthContext";
import getFeedPosts, {
  deleteFeedPost,
} from "../../context/feedPostContext/feedPostsApiCalls";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.scss";
import { useAPI } from "../../context/currentUserContext";

function Post() {
  const { user } = useContext(AuthContext);
  const { currentUser } = useAPI();
  console.log(currentUser);

  //All feedPosts
  const { feedPosts, dispatch } = useContext(FeedPostsContext);
  useEffect(() => {
    getFeedPosts(dispatch);
  }, [dispatch]);

  //Delete feedPost
  const [deleting, setDeleting] = useState(false);
  const handlePostDelete = (id) => {
    setDeleting(true);
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
        userId: user.others?._id,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {feedPosts.map((feedPost, index) => (
        <div key={index} index={index} className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={`/profile/${feedPost.userID}`} className="link">
                  <img
                    className="postProfileImg"
                    src={feedPost.profilePic}
                    alt=""
                  />
                </Link>

                <Link to={`/profile/${feedPost.userID}`} className="link">
                  <span className="postUsername">{feedPost.username}</span>
                </Link>

                <span className="postDate">{format(feedPost.createdAt)}</span>
              </div>
            </div>

            <div className="postCenter">
              <span className="postText">{feedPost.desc}</span>
              <img
                className="postImg"
                src={feedPost.img}
                onError={(event) => (event.target.style.display = "none")}
                alt=""
              />
            </div>

            <div className="postBottom">
              {/* Like dislike */}
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src="/assets/like.png"
                  alt=""
                  onClick={() => handleLike(feedPost._id)}
                />

                <span className="postLikeCounter">
                  {feedPost.likes.length} people like it
                </span>
              </div>

              {/* Save */}
              {feedPost.userID !== user._id && (
                <button
                  className="bookmark"
                  onClick={() => saveBookmarkPost(feedPost._id)}
                >
                  {currentUser?.bookmarks?.includes(feedPost._id)
                    ? "Saved"
                    : "Bookmark"}
                </button>
              )}
              {/* Delete */}
              <button
                className="bookmark"
                onClick={() => handlePostDelete(feedPost?._id)}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>

              <button className="bookmark">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
