import React, { useEffect, useState } from "react";
import "./bookMarkPost.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format } from "timeago.js";
import DeleteEditOpenCon from "../deleteEditOpenCon/DeleteEditOpenCon";
import axios from "axios";

function BookMarkPost({ bookmarkPostId }) {
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
  console.log(bookmarkPosts);

  //Open Close deleteEditCon
  const [openEditDeleteCon, setOpenEditDeleteCon] = useState(false);

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
            <span className="postText">{bookmarkPosts?.desc}</span>
            <img className="postImg" src="" alt="" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="likeIcon" src="/assets/heart.png" alt="" />
              <span className="postLikeCounter"> 9 people like it</span>
            </div>

            <button className="bookmark">Remove</button>
            <div className="postBottomRight">
              <span className="postCommentText">45 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMarkPost;
