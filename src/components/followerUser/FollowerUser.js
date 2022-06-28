import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./followerUser.scss";

function FollowerUser({ followerId }) {
  const { user } = useContext(AuthContext);
  //Fetching userCredentials from id
  const [followerInfo, setAllFollowerInfo] = React.useState({});
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`/users/get/${followerId}`);
        setAllFollowerInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, [followerId]);

  //Follow
  const [followed, setFollowed] = useState(false);
  const handleFollow = async () => {
    try {
      await axios.put(`/users/follow/${followerId}`, {
        userId: user.others._id,
      });
      setFollowed(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(followed);

  return (
    <>
      <div className="followerListItemCon">
        <Link to={`/profile/${followerId}`} className="link">
          <div className="followerListImgAndName">
            <img
              src={followerInfo?.profilePic}
              alt=""
              className="followerListImg"
            />
            <div className="followerListNameAndViewProfile">
              <span className="followerListName">{followerInfo.username}</span>
              <span className="followerListViewProfileTxt">View Profile</span>
            </div>
          </div>
        </Link>

        <button className="followerListFollowBack" onClick={handleFollow}>
          Follow back
        </button>
      </div>
    </>
  );
}

export default FollowerUser;
