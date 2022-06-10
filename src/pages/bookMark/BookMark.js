import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import BookMarkPost from "../../components/bookMarkPost/BookMarkPost";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import axios from "axios";
import "./bookMark.scss";

function BookMark() {
  const { user } = useContext(AuthContext);

  //Current user
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await axios.get(`/users/get/${user?._id}`);
      setCurrentUser(res.data);
    };
    fetchCurrentUser();
  }, [user]);

  //All Bookmarked posts
  const [bookmarkPostsId, setBookmarkPostsId] = useState([]);
  useEffect(() => {
    const fetchBookmarkPostsId = async () => {
      try {
        const res = await axios.get(`/users/bookmarkPosts/${user._id}`);
        setBookmarkPostsId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookmarkPostsId();
  }, [user?._id]);

  return (
    <>
      <Topbar />
      <div className="bookmark">
        <Leftbar />
        <div className="bmprofileRight">
          <div className="bmprofileRightTop">
            <div className="bmprofileContainer">
              <img className="bmcoverPicture" src={currentUser.profilePic} alt="" />
              <img className="bmprofilePicture" src={currentUser.coverPic} alt="" />
            </div>
          </div>

          <div className="bmprofileInfo">
            <div className="bmprofileInfoContainer">
              <h4 className="bmprofileInfoName">{currentUser.username}</h4>
            </div>
            <span className="bmtotalBookmarkPost">
              You have saved {bookmarkPostsId.length} Posts till now
            </span>
          </div>

          <div className="bmprofileRightBottom">
            <div className="bmprofileRightBookmarkPostCon">
              {bookmarkPostsId?.map((bookmarkPostId, i) => (
                <BookMarkPost
                  index={i}
                  key={i}
                  bookmarkPostId={bookmarkPostId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMark;
