import React, { useContext, useEffect } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profileRightBar.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
import FollowerUser from "../followerUser/FollowerUser";
import FollowingUser from "../followingUser/FollowingUser";

function ProfileRightBar({ viewUser }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const { user } = useContext(AuthContext);

  // //////////////\===========================
  const [userKoAllFollowersId, setUserKoAllFollowersId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        const res = await axios.get(`/users/allFollowers/${path}`);
        setUserKoAllFollowersId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFollowers();
  }, [path]);

  //Fetching all followings Id
  const [userKoAllFollowingsId, setUserKoAllFollowingsId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowings = async () => {
      try {
        const res = await axios.get(`/users/allFollowings/${path}`);
        setUserKoAllFollowingsId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFollowings();
  }, [path]);
  /////////=============================

  //Fetching all followers Id
  const [allFollowersId, setAllFollowersId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        const res = await axios.get(`/users/allFollowers/${user.others?._id}`);
        setAllFollowersId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFollowers();
  }, [user?.others?._id]);

  //Fetching all followings Id
  const [allFollowingsId, setAllFollowingsId] = React.useState([]);
  useEffect(() => {
    const fetchAllFollowings = async () => {
      try {
        const res = await axios.get(`/users/allFollowings/${user.others._id}`);
        setAllFollowingsId(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFollowings();
  }, [user?.others?._id]);

  return (
    <>
      {path ? (
        <>
          <h4 className="userInfo">User Information</h4>
          <div className="rightBarInfoContainer">
            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                {viewUser?.currentJobPosition1} at{" "}
                <span className="boldSpan">{viewUser?.currentJobCompany1}</span>
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                {viewUser?.currentJobPosition2} at{" "}
                <span className="boldSpan">
                  {viewUser?.currentJobCompany2},
                </span>
              </span>
            </div>
            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Founder at{" "}
                <span className="boldSpan">{viewUser?.founderOf1}</span>
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Co-founder at{" "}
                <span className="boldSpan">{viewUser?.founderOf1}</span>
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Former{" "}
                <span className="boldSpan">{viewUser?.pastJob1Position}</span>{" "}
                at {viewUser?.pastJob1Company}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <BusinessCenterIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Former{" "}
                <span className="boldSpan">{viewUser?.pastJob2Position}</span>{" "}
                at {viewUser?.pastJob2Company}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <SchoolIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Studies{" "}
                <span className="boldSpan">
                  {viewUser?.currentStudyingCourse}
                </span>{" "}
                at {""}
                {viewUser?.currentStudyingUniversity}{" "}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <SchoolIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                +2 Completed from{" "}
                <span className="boldSpan">
                  {viewUser?.plus2CompletedCollege}
                </span>{" "}
                {viewUser?.plus2CompletedCollegeLocation}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <SchoolIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                SEE completed from{" "}
                <span className="boldSpan">
                  {viewUser?.sEECompletedCollege}
                </span>{" "}
                {viewUser?.sEECompletedSchoolLocation}{" "}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <LocationCityIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Lives in{" "}
                <span className="boldSpan">{viewUser?.currentlyLiving}</span>{" "}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <LocationOnIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                From <span className="boldSpan">{viewUser?.from}</span>{" "}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <EmailIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">lokendra@gmail.com</span>
            </div>

            <div className="ppUserInfoItemCon">
              <LocationOnIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                Relationship: <span className="boldSpan">single</span>{" "}
              </span>
            </div>

            <div className="ppUserInfoItemCon">
              <MoreHorizIcon className="ppInfoIcon" />
              <span className="ppUserInfoItemTxt">
                See more about{" "}
                <span className="boldSpan">{viewUser?.username}</span>
              </span>
            </div>
          </div>
        </>
      ) : null}
      {/*  Followers ===================================*/}

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

          {/*  Following ===================================*/}
          <h4 className="followingHeading">Following</h4>
          {allFollowingsId?.map((followingId, i) => (
            <FollowingUser key={i} index={i} followingId={followingId} />
          ))}
        </>
      )}
    </>
  );
}

export default ProfileRightBar;
