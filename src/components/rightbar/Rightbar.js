import React from "react";
import "./rightbar.scss";
import ProfileRightBar from "../profileRightBar/ProfileRightBar";

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}

export default Rightbar;
