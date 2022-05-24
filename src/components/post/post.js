import React, { useContext, useEffect, useState } from "react";
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
                <img className="postProfileImg" src="" alt="" />
                <span className="postUsername">{feedPost.username}</span>
                <span className="postDate">{format(feedPost.createdAt)}</span>
              </div>

              <div className="postTopRight">
                <MoreVert />
              </div>
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
