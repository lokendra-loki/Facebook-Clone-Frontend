import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import ClearIcon from "@mui/icons-material/Clear";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./settingContainer.scss";

function SettingContainer() {
  return (
    <div className="settingContainer">
      <div className="scProfile">
        <img src="/assets/profile.jpeg" alt="" className="scProfileImg" />
        <div className="scProfileName">
          <span className="scUserName">Loki Chaulagain</span>
          <span className="scSeeProfileTxt">See your profile</span>
        </div>
      </div>
      <hr className="sc1" />

      <div className="scEdit">
        <div className="scIconCon">
          <SettingsIcon className="scIcon" />
        </div>
        <span className="sccTxt">Settings & privacy</span>
      </div>

      <div className="scEdit">
        <div className="scIconCon">
          <LogoutIcon className="scIcon" />
        </div>
        <span className="sccTxt">Logout</span>
      </div>
    </div>
  );
}

export default SettingContainer;
