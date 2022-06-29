import React, { useContext, useEffect } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profileRightBar.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
import FollowerUser from "../followerUser/FollowerUser";
import FollowingUser from "../followingUser/FollowingUser";

function ProfileRightBar() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);

  const [userKoAllFollowersId, setUserKoAllFollowersId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        const res = await axios.get(`/users/allFollowers/${path || user?._id}`);
        setUserKoAllFollowersId(res.data);
      } catch (error) {
        console.log(" path Empty");
      }
    };
    fetchAllFollowers();
  }, [path, user?._id]);

  //Fetching all followings Id
  const [userKoAllFollowingsId, setUserKoAllFollowingsId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowings = async () => {
      try {
        const res = await axios.get(
          `/users/allFollowings/${path || user?._id}`
        );
        setUserKoAllFollowingsId(res.data);
      } catch (error) {
        console.log(" path Empty");
      }
    };
    fetchAllFollowings();
  }, [path, user?._id]);

  //Fetching all followers Id
  const [allFollowersId, setAllFollowersId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        const res = await axios.get(`/users/allFollowers/${user?._id}`);
        setAllFollowersId(res.data);
      } catch (error) {
        console.log(" path Empty");
      }
    };
    fetchAllFollowers();
  }, [user?._id]);

  //Fetching all followings Id
  const [allFollowingsId, setAllFollowingsId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowings = async () => {
      try {
        const res = await axios.get(`/users/allFollowings/${user?._id}`);
        setAllFollowingsId(res.data);
      } catch (error) {
        console.log(" path Empty");
      }
    };
    fetchAllFollowings();
  }, [user?._id]);

  //Fetch userDetail
  const [userDetail, setUserDetail] = React.useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await axios.post("/userDetail/userDetailData", {
          userID: user?._id,
        });
        setUserDetail(res.data[0]);
      } catch (error) {
        console.log(" path Empty");
      }
    };
    fetchUserDetail();
  }, [user?._id]);

  return (
    <>
      {path ? (
        <>
          <h4 className="userInfo">User Information</h4>
          <div className="rightBarInfoContainer">
            {userDetail?.currentJobPosition1 && (
              <div className="ppUserInfoItemCon">
                <BusinessCenterIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  {userDetail?.currentJobPosition1}{" "}
                  {userDetail?.currentJobCompany1 && "at "}
                  <span className="boldSpan">
                    {userDetail?.currentJobCompany1}
                  </span>
                </span>
              </div>
            )}

            {userDetail?.currentJobPosition2 && (
              <div className="ppUserInfoItemCon">
                <BusinessCenterIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  {userDetail?.currentJobPosition2}{" "}
                  {userDetail?.currentJobCompany2 && "at "}
                  <span className="boldSpan">
                    {userDetail?.currentJobCompany2}
                  </span>
                </span>
              </div>
            )}

            {userDetail?.founderOf1 && (
              <div className="ppUserInfoItemCon">
                <BusinessCenterIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  Founder at{" "}
                  <span className="boldSpan">{userDetail?.founderOf1}</span>
                </span>
              </div>
            )}

            {userDetail?.founderOf1 && (
              <div className="ppUserInfoItemCon">
                <BusinessCenterIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  Co-founder at{" "}
                  <span className="boldSpan">{userDetail?.founderOf1}</span>
                </span>
              </div>
            )}

            {userDetail?.currentStudyingCourse && (
              <div className="ppUserInfoItemCon">
                <SchoolIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  Studies{" "}
                  <span className="boldSpan">
                    {userDetail?.currentStudyingCourse}
                  </span>{" "}
                  {userDetail?.currentStudyingUniversity && "at "} {""}
                  <span className="boldSpan">
                    {userDetail?.currentStudyingUniversity}
                  </span>
                </span>
              </div>
            )}

            {userDetail?.plus2CompletedCollege && (
              <div className="ppUserInfoItemCon">
                <SchoolIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  +2 Completed from{" "}
                  <span className="boldSpan">
                    {userDetail?.plus2CompletedCollege}
                  </span>{" "}
                  {userDetail?.plus2CompletedCollegeLocation}
                </span>
              </div>
            )}

            {userDetail?.currentlyLiving && (
              <div className="ppUserInfoItemCon">
                <LocationCityIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  Lives in{" "}
                  <span className="boldSpan">
                    {userDetail?.currentlyLiving}
                  </span>{" "}
                </span>
              </div>
            )}

            {userDetail?.from && (
              <div className="ppUserInfoItemCon">
                <LocationOnIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  From <span className="boldSpan">{userDetail?.from}</span>{" "}
                </span>
              </div>
            )}

            {userDetail?.username && (
              <div className="ppUserInfoItemCon">
                <MoreHorizIcon className="ppInfoIcon" />
                <span className="ppUserInfoItemTxt">
                  See more about{" "}
                  <span className="boldSpan">{userDetail?.username}</span>
                </span>
              </div>
            )}

            <button
              className="profileEdiBut"
              onClick={() =>
                window.location.replace(`/profileEdit/${user?._id}`)
              }
            >
              Edit
            </button>
          </div>
        </>
      ) : null}
      '{/*  Followers ===================================*/}
      {/* ============ */}
      {path ? (
        <>
          <h4 className="followerHeading">Followers</h4>
          {userKoAllFollowersId?.map((followerId, i) => (
            <FollowerUser key={i} followerId={followerId} index={i} />
          ))}

          {/*  Following ===================================*/}
          <h4 className="followingHeading">Following</h4>
          {userKoAllFollowingsId?.map((followingId, i) => (
            <FollowingUser key={i} index={i} followingId={followingId} />
          ))}
        </>
      ) : (
        <>
          <h4 className="followerHeading">Followers</h4>
          {allFollowersId?.map((followerId, i) => (
            <FollowerUser key={i} followerId={followerId} index={i} />
          ))}
          {/* <FollowerUser /> */}

          {/*  Following ===================================*/}
          <h4 className="followingHeading">Following</h4>
          {allFollowingsId?.map((followingId, i) => (
            <FollowingUser key={i} index={i} followingId={followingId} />
          ))}
          {/* <FollowerUser /> */}
        </>
      )}
    </>
  );
}

export default ProfileRightBar;
