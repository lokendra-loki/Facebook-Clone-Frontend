import React, { useContext, useEffect, useState } from "react";
import "./profile.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import EditProfile from "../../components/editProfileInfo/EditProfile";

function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  //Fetching data from URl id
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  //At first user create profile with username and email
  //suppose user has not created any user detail yet then we cant be able to show name on profile
  //so we will show username from id not from detail
  const [getUser, setGetUser] = useState({});
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get(`/users/get/${path}`);
      setGetUser(res.data);
    };
    fetchInfo();
  }, [path]);

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

  //Follow user
  const [followed, setFollowed] = useState(false);

  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`/users/follow/${path}`, { userId: user.others._id });
        setFollowed(false);
      } else {
        await axios.put(`/users/unfollow/${path}`, {
          userId: user.others._id,
        });
        setFollowed(true);
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };
  console.log(followed);

  //To open Edit Profile Container
  const [openEditCon, setOpenEditCon] = useState(false);

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
              <button className="followButton" onClick={handleFollow}>
                Follow
              </button>
            </div>
          </div>

          <div className="profileInfo">
            <div className="followersFollowingCount">
              <div className="followersCount">
                <span className="followersCountTxt">Followers</span>
                <span className="followerNumber">644</span>
              </div>

              <hr className="piHr" />
              <div className="followersCount">
                <span className="followersCountTxt">Following</span>
                <span className="followerNumber">644</span>
              </div>
            </div>

            <div className="profileInfoContainer">
              <h4 className="profileInfoName">
                {getUser.username} ({viewUser.nickName}){" "}
              </h4>
              <span className="profileDescription">{viewUser.bio}</span>
            </div>

            <button
              className="profileEditBut"
              onClick={() => setOpenEditCon(!openEditCon)}
            >
              <EditIcon />
              <span className="editProfileTxt">
                {openEditCon ? " Cancel" : " Edit Profile"}
              </span>
            </button>
          </div>

          {openEditCon && (
            <EditProfile viewUser={viewUser} closeEditCon={setOpenEditCon} />
          )}

          <div className="profileRightBottom">
            <Feed />
            <Rightbar viewUser={viewUser} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
