import React from "react";
import { Link } from "react-router-dom";
import "./searchUserResult.scss";

function SearchUserResult({ searchUserResultData }) {
  console.log(searchUserResultData);
  return (
    <>
      {searchUserResultData?.map((user, index) => (
        <Link key={index} to={`/profile/${user._id}`} className="link">
          <li key={index} className="leftBarFriend">
            <img src={user.profilePic} alt="" className="leftBarFriendImg" />
            <span className="leftBarFriendName">{user.username}</span>
          </li>
        </Link>
      ))}
    </>
  );
}

export default SearchUserResult;
