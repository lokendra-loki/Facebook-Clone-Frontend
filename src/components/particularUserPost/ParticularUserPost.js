import React, { useContext, useEffect, useState } from "react";
import "./particularUserPost.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import { deleteFeedPost } from "../../context/feedPostContext/feedPostsApiCalls";
import { format } from "timeago.js";
import DeleteEditOpenCon from "../deleteEditOpenCon/DeleteEditOpenCon";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function ParticularUserPost({ masterCurrentUser, particularPosts }) {
 
  //Fetch all feedPosts
  const { dispatch } = useContext(FeedPostsContext);
  const { user } = useContext(AuthContext);
  const currentUser = user?.others;

  //Delete feedPost
  const handlePostDelete = (id) => {
    deleteFeedPost(id, dispatch);
    window.location.reload();
  };

  //Bookmark
  const [bookmarked, setBookmarked] = useState(false);
  const saveBookmarkPost = async (id) => {
    try {
      await axios.put(`/users/bookmark/${particularPosts?._id}`, {
        userId: currentUser?._id,
      });
      setBookmarked(true);
    } catch (error) {
      console.log(error);
    }
  };

  //Open Close deleteEditCon
  const [openEditDeleteCon, setOpenEditDeleteCon] = useState(false);

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              {/* <Link to={`/profile/feedPosts.userID`}> */}
              <img
                className="postProfileImg"
                src={particularPosts?.profilePic}
                alt=""
              />
              {/* </Link> */}
              <span className="postUsername">{particularPosts?.username}</span>

              <span className="postDate">
                {format(particularPosts?.createdAt)}
              </span>
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
            <span className="postText">{particularPosts?.desc}</span>
            <img className="postImg" src="" alt="" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="likeIcon" src="/assets/heart.png" alt="" />
              <span className="postLikeCounter"> 9 people like it</span>
            </div>
            <button
              className="postDeleteBut"
              onClick={() => handlePostDelete(particularPosts?._id)}
            >
              delete
            </button>

            <button
              className="bookmark"
              onClick={() => saveBookmarkPost(particularPosts?._id)}
            >
              Bookmark
            </button>
            <div className="postBottomRight">
              <span className="postCommentText">45 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParticularUserPost;
