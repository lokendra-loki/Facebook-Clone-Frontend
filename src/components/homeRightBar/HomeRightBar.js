import React from "react";
import "./homeRightBar.scss";

function HomeRightBar() {
  return (
    <>
      <div className="birthdayContainer">
        {/* BirthdatContainer------------------------------ */}
        <img src="/assets/gift.png" alt="" className="birthdayImage" />
        <span className="birthdayText">
          <b>Samir</b> and <b>three other friends</b> have a birthday today
        </span>
      </div>

      {/* RightBarAd--------------------------------- */}
      <img src="/assets/ad.png" alt="" className="rightBarAd" />
      <h4 className="rightBarTitle">Online Friends</h4>
      <ul className="rightBarFriendList">
        {/* online friend  */}
        {/* <Online /> */}
      </ul>
    </>
  );
}

export default HomeRightBar;
