import React from 'react'
import "./rightbar.scss"

function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">

        {/* BirthdatContainer------------------------------ */}
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Samir</b> and <b>three other friends</b> have a birthday today</span>
        </div>

        {/* RightBarAd--------------------------------- */}
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <div className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img src="/assets/person/3.jpeg" alt="" className="rightBarprofileImg" />
              <span className="rightBarOnline">lok</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar