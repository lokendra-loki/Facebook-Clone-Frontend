import React from "react";
import "./profileRightBar.scss";

function ProfileRightBar() {
  return (
    <>
      <h4 className="userInfo">User Information</h4>
      <div className="rightBarInfoContainer">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue">Kathmandu, Nepal</span>
        </div>

        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">Tikapur Kailali</span>
        </div>

        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">single</span>
        </div>
      </div>

      <h4>User Friends</h4>
      <div className="rightBarFollowings">
        <div className="eachRightBarFollowing">
          <img
            src="/assets/person/4.jpeg"
            alt=""
            className="rightBarFollowingImage"
          />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>

        <div className="eachRightBarFollowing">
          <img
            src="/assets/person/3.jpeg"
            alt=""
            className="rightBarFollowingImage"
          />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>

        <div className="eachRightBarFollowing">
          <img
            src="/assets/person/9.jpeg"
            alt=""
            className="rightBarFollowingImage"
          />
          <span className="rightBarFollowingUsername">Sunil Khatri</span>
        </div>
      </div>
    </>
  );
}

export default ProfileRightBar;
