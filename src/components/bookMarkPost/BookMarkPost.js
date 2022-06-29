import React, { useContext, useEffect, useState } from "react";
import "./bookMarkPost.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format } from "timeago.js";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function BookMarkPost({ bookmarkPostId }) {
  const { user } = useContext(AuthContext);

  //get bookmark posts detail from id
  const [bookmarkPosts, setBookmarkPosts] = useState({});
  useEffect(() => {
    const fetchBookmarkPosts = async () => {
      try {
        const res = await axios.get(`/posts/bookmarkPosts/${bookmarkPostId}`);
        setBookmarkPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookmarkPosts();
  }, [bookmarkPostId]);

  //Bookmark
  const removeBookmarkPost = async (id) => {
    try {
      await axios.put(`/users/bookmark/${bookmarkPostId}`, {
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
                src={bookmarkPosts?.profilePic}
                alt=""
              />
              <span className="postUsername">{bookmarkPosts?.username}</span>
              <span className="postDate">
                {format(bookmarkPosts?.createdAt)}
              </span>
            </div>

            <div className="postTopRight">
              <MoreHorizIcon />
            </div>
          </div>

          <div className="postCenter">
            <span className="postText">{bookmarkPosts?.desc}</span>
            <img className="postImg" src={bookmarkPosts?.img} alt="" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="/assets/like.png"
                alt=""
                onClick={() => handleLike(bookmarkPosts._id)}
              />

              <span className="postLikeCounter">
                {" "}
                {bookmarkPosts?.likes?.length} Likes
              </span>
            </div>

            <button className="bookmark" onClick={removeBookmarkPost}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMarkPost;
