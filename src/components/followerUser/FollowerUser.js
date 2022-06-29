import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./followerUser.scss";

function FollowerUser({ followerId }) {
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
      </div>
    </>
  );
}

export default FollowerUser;
