import React from 'react'
import "./online.scss"

function Online({user}) {
  return (
    <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img src={user.profilePicture} alt="" className="rightBarprofileImg" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{user.username}</span>

          </li>
  )
}

export default Online