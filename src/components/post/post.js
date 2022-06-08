import React, { useContext, useEffect, useState } from "react";
import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import getFeedPosts, {
  deleteFeedPost,
} from "../../context/feedPostContext/feedPostsApiCalls";
import { format } from "timeago.js";
import DeleteEditOpenCon from "../deleteEditOpenCon/DeleteEditOpenCon";
import axios from "axios";
import { Link } from "react-router-dom";

function Post({ masterCurrentUser }) {
  //Fetch all feedPosts
  const { feedPosts, dispatch } = useContext(FeedPostsContext);
  useEffect(() => {
    getFeedPosts(dispatch);
  }, [dispatch]);

  //Delete feedPost
  const handlePostDelete = (id) => {
    deleteFeedPost(id, dispatch);
    window.location.reload();
  };

  //Bookmark
  const [bookmarked, setBookmarked] = useState(false);
  const saveBookmarkPost = async (id) => {
    try {
      await axios.put(`/users/bookmark/${id}`, {
        userId: masterCurrentUser?._id,
      });
      setBookmarked(true);
    } catch (error) {
      console.log(error);
    }
  };

  //Open Close deleteEditCon
  const [openEditDeleteCon, setOpenEditDeleteCon] = useState(false);

  //Like and dislike
  const [liked, setLiked] = useState(false);
  const handleLike = async (id) => {
    try {
      const res = await axios.put(`/posts/like/${id}`, {
        userId: masterCurrentUser._id,
      });
      setLiked(true);
    } catch (error) {
      console.log(error);
    }
    setLiked(liked ? liked - 1 : liked + 1);
    setLiked(!liked);
  };
  console.log(liked);

  return (
    <>
      {feedPosts.map((feedPost, index) => (
        <div key={index} index={index} className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                {/* <Link to={`/profile/feedPosts.userID`}> */}
                <img
                  className="postProfileImg"
                  src={feedPost.profilePic}
                  alt=""
                />
                {/* </Link> */}
                <span className="postUsername">{feedPost.username}</span>

                <span className="postDate">{format(feedPost.createdAt)}</span>
              </div>

              <div
                className="postTopRight"
                onClick={() => setOpenEditDeleteCon(!openEditDeleteCon)}
              >
                <MoreHorizIcon />
              </div>
            </div>

            <div className="deleteEditConWrapper">
              {openEditDeleteCon && (
                <DeleteEditOpenCon closeEditDeleteCon={setOpenEditDeleteCon} />
              )}
            </div>

            <div className="postCenter">
              <span className="postText">{feedPost.desc}</span>
              <img className="postImg" src={feedPost.img} alt="" />
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
                <img
                  className="likeIcon"
                  src="/assets/heart.png"
                  alt=""
                  onClick={() => handleLike(feedPost._id)}
                />
                <span className="postLikeCounter">
                  {feedPost.likes.length} people like it
                </span>
              </div>

              {/* Delete */}
              <button
                className="postDeleteBut"
                onClick={() => handlePostDelete(feedPost._id)}
              >
                delete
              </button>

              <button
                className="bookmark"
                onClick={() => saveBookmarkPost(feedPost._id)}
              >
                Bookmark
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
