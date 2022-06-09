import React, { useContext, useEffect, useState } from "react";
import "./bookMarkPost.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format } from "timeago.js";
import DeleteEditOpenCon from "../deleteEditOpenCon/DeleteEditOpenCon";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function BookMarkPost({ bookmarkPostId }) {
  const { user } = useContext(AuthContext);
  const currentUser = user.others;
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
  const [removedBookmarked, setRemovedBookmarked] = useState(true);
  const removeBookmarkPost = async (id) => {
    try {
      await axios.put(`/users/bookmark/${bookmarkPostId}`, {
        userId: currentUser?._id,
      });
      setRemovedBookmarked(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(removedBookmarked);

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
            <img className="postImg" src={bookmarkPosts.img} alt="" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="likeIcon" src="/assets/heart.png" alt="" />
              <span className="postLikeCounter"> 9 people like it</span>
            </div>

            <button className="bookmark" onClick={removeBookmarkPost}>
              Remove
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

export default BookMarkPost;
