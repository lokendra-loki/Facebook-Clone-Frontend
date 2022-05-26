import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

function FollowerUser({ followerId, followerUserDetail }) {
  console.log(followerUserDetail);
  //   console.log(followerId);
  const { user } = useContext(AuthContext);

  //Fetching userInfo from id
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
  //   console.log(followerInfo);

  //Fetching userDetails from id
  //   const [followerUserDetail, setFollowerUserDetail] = useState({});
  //   useEffect(() => {
  //     try {
  //       const fetchFollowerUserDetail = async () => {
  //         const res = await axios.post("/userDetail/userDetailData", {
  //           userID: followerId,
  //         });
  //         setFollowerUserDetail(res.data);
  //       };
  //       fetchFollowerUserDetail();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [followerId]);
  //   console.log(followerUserDetail);
  //follower info bata chai photo aunxa so store photo in user

  return (
    <>
      <div className="followerListItemCon">
        <div className="followerListImgAndName">
          <img src="/assets/profile.jpeg" alt="" className="followerListImg" />
          <div className="followerListNameAndViewProfile">
            <span className="followerListName">{followerInfo.username}</span>
            <span className="followerListViewProfileTxt">View Profile</span>
          </div>
        </div>
        <button className="followerListFollowBack">Follow back</button>
      </div>
    </>
  );
}

export default FollowerUser;
