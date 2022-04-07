import React from 'react'
import "./rightbar.scss"
import { Users } from "../../dummyData"
import Online from '../online/Online'


// props pass garey ko yeta hai
function Rightbar({user}) {
  // Inner components here
  const HomeRightbar = () => {
    return (
      // fragments are used to group multiple elements
      <>
        <div className="birthdayContainer">
          {/* BirthdatContainer------------------------------ */}
          <img src="/assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Samir</b> and <b>three other friends</b> have a birthday today</span>
        </div>

        {/* RightBarAd--------------------------------- */}
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">

          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }



  //-----------for profile page-----------------
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="userInfo">User Information</h4>
        <div className="rightBarInfoContainer">

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">{user.relationship ===1 ? "single" :user.relationship ===2 ? "Married" : "_"}</span>
          </div>

          
        </div>

        <h4>User Friends</h4>
        <div className="rightBarFollowings">
          <div className="eachRightBarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/8.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/9.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>
        </div>
      </>
    )
  }



  //------------------------------------lets call here---------------
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
       {user ? <ProfileRightbar /> : <HomeRightbar />}

        {/* if it is not profile right bar we will send home right bar */}
        {/* <HomeRightbar/> */}






      </div>
    </div>
  )
}

export default Rightbar