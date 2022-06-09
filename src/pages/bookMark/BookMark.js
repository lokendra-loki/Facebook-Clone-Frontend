import React, { useContext, useEffect, useState } from "react";
import "./bookMark.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import BookMarkPost from "../../components/bookMarkPost/BookMarkPost";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import Rightbar from "../../components/rightbar/Rightbar";

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
      <div className="bookmark">
        <Leftbar />
        <div className="bmprofileRight">
          <div className="bmprofileRightTop">
            <div className="bmprofileContainer">
              <img className="bmcoverPicture" src="" alt="" />
              <img className="bmprofilePicture" src="" alt="" />
            </div>
          </div>

          <div className="bmprofileInfo">
            <div className="bmprofileInfoContainer">
              <h4 className="bmprofileInfoName">
                {user.others?.username} ({viewUser?.nickName}){" "}
              </h4>
              <span className="bmprofileDescription">{viewUser?.bio}</span>
            </div>
            <span className="bmtotalBookmarkPost">
              You have saved  {bookmarkPostsId.length}  Posts till now
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
