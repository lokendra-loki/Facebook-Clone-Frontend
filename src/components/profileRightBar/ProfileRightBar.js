import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import "./profileRightBar.scss";
import SettingContainer from "../settingContainer/SettingContainer";

function ProfileRightBar({ viewUser }) {
  console.log(viewUser);

  return (
    <>
      <SettingContainer />
      <h4 className="userInfo">User Information</h4>

      <div className="rightBarInfoContainer">
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {viewUser?.currentJobPosition1} at {viewUser?.currentJobCompany1}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            {viewUser?.currentJobPosition2} at {viewUser?.currentJobCompany2}
          </span>
        </div>
        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Founder at {viewUser?.founderOf1}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Co-founder at {viewUser?.founderOf1}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former Web Development Trainee at Innovative Techno Consultant Pvt.
            Ltd.
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <BusinessCenterIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Former Web Development Trainee at Innovative Techno Consultant Pvt.
            Ltd.
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            Studies {viewUser?.currentStudyingCourse} at
            {viewUser?.currentStudyingUniversity}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            +2 Completed from {viewUser?.plus2CompletedCollege}{" "}
            {viewUser?.plus2CompletedCollegeLocation}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <SchoolIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            SEE completed from{viewUser?.sEECompletedCollege}{" "}
            {viewUser?.sEECompletedCollegeLocation}
          </span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationCityIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">Lives in Kathmandu</span>
        </div>

        <div className="ppUserInfoItemCon">
          <LocationOnIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">From Tikapur</span>
        </div>

        <div className="ppUserInfoItemCon">
          <EmailIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">lokendra@gmail.com</span>
        </div>

        <div className="ppUserInfoItemCon">
          <MoreHorizIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            See more about {viewUser?.username}
          </span>
        </div>

        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">single</span>
        </div>
      </div>

      <h4>User Friends</h4>
      <div className="rightBarFollowings">
        <div className="eachRightBarFollowing">
          <img src="" alt="" className="rightBarFollowingImage" />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>

        <div className="eachRightBarFollowing">
          <img src="g" alt="" className="rightBarFollowingImage" />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>

        <div className="eachRightBarFollowing">
          <img src="" alt="" className="rightBarFollowingImage" />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>
      </div>
    </>
  );
}

export default ProfileRightBar;
