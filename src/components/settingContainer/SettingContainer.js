import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./settingContainer.scss";

function SettingContainer({ userInfo }) {
  //Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <div className="settingContainer">
      <Link to={`/profile/${userInfo?._id}`} className="link">
        <div className="scProfile">
          <img src={userInfo?.profilePic} alt="" className="scProfileImg" />
          <div className="scProfileName">
            <span className="scUserName">{userInfo?.username}</span>
            <span className="scSeeProfileTxt">See your profile</span>
          </div>
        </div>
      </Link>

      <hr className="sc1" />

      <Link to={`/settings/${userInfo?._id}`} className="link">
        <div className="scEdit">
          <div className="scIconCon">
            <SettingsIcon className="scIcon" />
          </div>
          <span className="sccTxt">Settings & privacy</span>
        </div>
      </Link>

      <div className="scEdit" onClick={handleLogout}>
        <div className="scIconCon">
          <LogoutIcon className="scIcon" />
        </div>
        <span className="sccTxt">Logout</span>
      </div>
    </div>
  );
}

export default SettingContainer;
