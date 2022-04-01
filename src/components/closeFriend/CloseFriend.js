import React from 'react'
import "./closeFriend.scss"

function CloseFriend({user}) {
    return (
        <li className="leftBarFriend">
            <img src={user.profilePicture} alt="" className="leftBarFriendImg" />
            <span className="leftBarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend