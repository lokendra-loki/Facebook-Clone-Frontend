import React from "react";
import "./profileRightBar.scss";

function ProfileRightBar({ viewUser }) {
  console.log(viewUser);

  return (
    <>
      <h4 className="userInfo">User Information</h4>
      <div className="rightBarInfoContainer">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue">{viewUser?.currentlyLiving}</span>
        </div>

        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">{viewUser?.from}</span>
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
