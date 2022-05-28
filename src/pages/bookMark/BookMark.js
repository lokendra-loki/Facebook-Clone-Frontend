import React, { useContext, useEffect, useState } from "react";
import "./bookMark.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import BookMarkPost from "../../components/bookMarkPost/BookMarkPost";

function BookMark() {
  const { user } = useContext(AuthContext);

  //Fetching data from URl id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //Fetching userDetail according to userID element
  const [viewUser, setViewUser] = useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await axios.post("/userDetail/userDetailData", {
          userID: path,
        });
        setViewUser(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetail();
  }, [path]);
  console.log(viewUser);

  //Fetch all bookmark postId
  const [bookmarkPostsId, setBookmarkPostsId] = useState([]);
  useEffect(() => {
    const fetchBookmarkPostsId = async () => {
      try {
        const res = await axios.get(`/users/bookmarkPosts/${user.others._id}`);
        setBookmarkPostsId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookmarkPostsId();
  }, [user.others._id]);
  console.log(bookmarkPostsId);
 

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileContainer">
              <img className="coverPicture" src="" alt="" />
              <img className="profilePicture" src="" alt="" />
            </div>
          </div>

          <div className="profileInfo">
            <div className="profileInfoContainer">
              <h4 className="profileInfoName">
                {user.others?.username} ({viewUser?.nickName}){" "}
              </h4>
              <span className="profileDescription">{viewUser?.bio}</span>
            </div>
            <span className="totalBookmarkPost">
              {bookmarkPostsId.length} Saved Posts
            </span>
          </div>

          <div className="profileRightBottom">
            <div className="profileRightBookmarkPostCon">
              {bookmarkPostsId?.map((bookmarkPostId, i) => (
                <BookMarkPost
                  index={i}
                  key={i}
                  bookmarkPostId={bookmarkPostId}
                />
              ))}
            </div>
            <Rightbar viewUser={viewUser} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMark;
