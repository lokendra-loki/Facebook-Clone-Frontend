import React from "react";
import "./rightbar.scss";
import ProfileRightBar from "../profileRightBar/ProfileRightBar";
import SettingContainer from "../settingContainer/SettingContainer";

function Rightbar({ viewUser }) {
  // console.log(viewUser)
  return (
    <>
      <div className="rightBar">
        <div className="rightBarWrapper">
          <ProfileRightBar viewUser={viewUser} />
        </div>
      </div>
    </>
  );
}

export default Rightbar;
