import React, { useContext, useEffect, useState } from "react";
import "./profile.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  //Fetching data from URl id
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];
  // console.log(path.others)

  //Fetching userDetail according to userID element
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await axios.post("/userDetail/userDetailData", {
          userID: user.others._id,
        });
        setCurrentUser(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetail();
  }, [user.others._id]);
  console.log(currentUser);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileContainer">
              <img
                className="coverPicture"
                src="/assets/post/default.jpeg"
                alt=""
              />
              <img
                className="profilePicture"
                src="/assets/person/default.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{currentUser.username}</h4>
            <span className="profileDescription">
              This is profile description
            </span>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
