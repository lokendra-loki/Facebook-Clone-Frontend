import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import ClearIcon from "@mui/icons-material/Clear";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate } from "react-router-dom";
import "./settingContainer.scss";
import { AuthContext } from "../../context/authContext/AuthContext";

function SettingContainer({ currentUser, currentUserDetail }) {
  console.log(currentUser);
  console.log(currentUserDetail);
  const { user, dispatch } = useContext(AuthContext);

  //
  //Logout
  // const handleLogout = (e) => {
  //   dispatch({ type: "LOGOUT" });
  //   window.location.replace("/login")
  // };

  //Logout Alternative
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <div className="settingContainer">
      <Link to={`/profile/${currentUser.others?._id}`} className="link">
        <div className="scProfile">
          <img
            src={currentUserDetail[0]?.profilePic}
            alt=""
            className="scProfileImg"
          />
          <div className="scProfileName">
            <span className="scUserName">{currentUser.others?.username}</span>
            <span className="scSeeProfileTxt">See your profile</span>
          </div>
        </div>
      </Link>

      <hr className="sc1" />

      <Link to={`/settings/${currentUser.others?._id}`} className="link">
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
