import React, { useContext, useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import EditProfile from "../../components/editProfileInfo/EditProfile";
import ParticularUserPost from "../../components/particularUserPost/ParticularUserPost";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import axios from "axios";
import "./profile.scss";
import { useAPI } from "../../context/currentUserContext";

function Profile() {
  const [openEditCon, setOpenEditCon] = useState(false);
  const { user } = useContext(AuthContext);
  const { currentUser } = useAPI();

  //Fetching data from URl id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //get details
  const [getUser, setGetUser] = useState({});
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get(`/users/get/${path}`);
      setGetUser(res.data);
    };
    fetchInfo();
  }, [path]);
  console.log(getUser);

  //Fetching userDetail
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

  //Fetch all posts of particular user only from URL id
  const [particularUserAllPosts, setParticularUserAllPosts] = useState([{}]);
  useEffect(() => {
    try {
      const fetchParticularUserAllPosts = async () => {
        const res = await axios.post("/posts/getUserPosts", {
          userID: path,
        });
        setParticularUserAllPosts(res.data);
      };
      fetchParticularUserAllPosts();
    } catch (error) {
      console.log(error);
    }
  }, [path]);

  //Alternative
  const [followed, setFollowed] = useState(false);
  const [unfollowed, setUnfollowed] = useState(false);
  const handleFollow = async () => {
    try {
      await axios.put(`/users/follow/${path}`, {
        userId: user?._id,
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
        userId: user?._id,
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

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileLeftWrapper">
          <Leftbar />
        </div>

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileContainer">
              <img className="coverPicture" src={getUser.coverPic} alt="" />
              <img className="profilePicture" src={getUser.profilePic} alt="" />
              {path !== user._id && (
                <div className="ButtonCon">
                  {!getUser?.followers?.includes(user._id) ? null : (
                    <button className="followButton" onClick={handleUnFollow}>
                      Unfollow
                    </button>
                  )}

                  <button className=" followingButton" onClick={handleFollow}>
                    {getUser.followers?.includes(user._id)
                      ? "Following"
                      : "Follow"}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="profileInfo">
            <div className="followersFollowingCount">
              <div className="followersCount">
                <span className="followersCountTxt">Followers</span>
                <span className="followerNumber">
                  {getUser?.followers?.length}
                </span>
              </div>

              <hr className="piHr" />
              <div className="followersCount">
                <span className="followersCountTxt">Following</span>
                <span className="followerNumber">
                  {getUser?.followings?.length}
                </span>
              </div>
            </div>

            <div className="profileInfoContainer">
              <h4 className="profileInfoName">
                {getUser?.username} ({viewUser?.nickName}){" "}
              </h4>
              <span className="profileDescription">{viewUser?.bio}</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <div className="yourTotalPostsCon">
              <span className="yourTotalPosts">
                User have created {particularUserAllPosts?.length} posts till
                now
              </span>
            </div>

            {/* <Feed /> */}
            <div className="profileRightBottomUserPostsWrapper">
              <div className="profileRightBottomUserPosts">
                {particularUserAllPosts?.map((particularPosts, i) => (
                  <ParticularUserPost
                    key={i}
                    index={i}
                    particularPosts={particularPosts}
                  />
                ))}
              </div>
              <div className="profileRightWrapper">
                {/* <Rightbar viewUser={viewUser} /> */}
                <ProfileRightBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
