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
import { AuthContext } from "../../context/authContext/AuthContext";

function Post() {
  const { user } = useContext(AuthContext);

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

  //Bookmark  save
  const [bookmarked, setBookmarked] = useState(false);
  const saveBookmarkPost = async () => {
    try {
      // setBookmarked(true);
      const res = await axios.put(
        `/users/bookmark/${"628daedd04d844e9a971cd22"}`,
        {
          userId: user.others._id,
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //open deleteEditOpenCon
  const [openEditDeleteCon, setOpenEditDeleteCon] = useState(false);

  return (
    <>
      {feedPosts.map((feedPost, index) => (
        <div key={index} className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img className="postProfileImg" src="" alt="" />
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
              <img className="postImg" src="" alt="" />
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

              <button className="bookmark" onClick={saveBookmarkPost}>
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
