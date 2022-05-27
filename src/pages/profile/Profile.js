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

  //Fetching data from URl id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

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

  //Follow user
  // const [followed, setFollowed] = useState(false);
  // const handleFollow = async () => {
  //   try {
  //     if (followed) {
  //       setFollowed(false);
  //       await axios.put(`/users/unfollow/${path}`, { userId: user.others._id });
  //     } else {
  //       await axios.put(`/users/follow/${path}`, {
  //         userId: user.others._id,
  //       });
  //       setFollowed(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setFollowed(!followed);
  // };
  // console.log(followed);

  //Alternative
  const [followed, setFollowed] = useState(false);
  const [unfollowed, setUnfollowed] = useState(false);
  const handleFollow = async () => {
    try {
      await axios.put(`/users/follow/${path}`, {
        userId: user.others._id,
      });
      setFollowed(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollow = async () => {
    try {
      await axios.put(`/users/unfollow/${path}`, {
        userId: user.others._id,
      });
      setUnfollowed(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //follower and following count
  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const res1 = await axios.get(`/users/followers/${path}`);
        const res2 = await axios.get(`/users/followings/${path}`);
        setFollowers(res1.data);
        setFollowings(res2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFollowers();
  }, [path]);
  console.log(followers);
  console.log(followings);

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
              <div className="ButtonCon">
                <button className="followButton" onClick={handleUnFollow}>
                  UnFollow
                </button>
                <button className=" followingButton" onClick={handleFollow}>
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="profileInfo">
            <div className="followersFollowingCount">
              <div className="followersCount">
                <span className="followersCountTxt">Followers</span>
                <span className="followerNumber">{followers}</span>
              </div>

              <hr className="piHr" />
              <div className="followersCount">
                <span className="followersCountTxt">Following</span>
                <span className="followerNumber">{followings}</span>
              </div>
            </div>

            <div className="profileInfoContainer">
              <h4 className="profileInfoName">
                {getUser?.username} ({viewUser?.nickName}){" "}
              </h4>
              <span className="profileDescription">{viewUser?.bio}</span>
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
