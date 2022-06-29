import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./followingUser.scss";

function FollowingUser({ followingId }) {
  //Fetching userCredentials from id
  const [followingInfo, setAllFollowingInfo] = React.useState({});
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`/users/get/${followingId}`);
        setAllFollowingInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, [followingId]);

  return (
    <>
      <div className="followingListItemCon">
        <Link to={`/profile/${followingId}`} className="link">
          <div className="followingListImgAndName">
            <img
              src={followingInfo.profilePic}
              alt=""
              className="followingListImg"
            />
            <div className="followingListNameAndViewProfile">
              <span className="followingListName">
                {followingInfo.username}
              </span>
              <span className="followingListViewProfileTxt">View Profile</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FollowingUser;
