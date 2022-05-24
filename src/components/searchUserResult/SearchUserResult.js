import React from "react";
import "./searchUserResult.scss";

function SearchUserResult({ searchUserResultData }) {
  console.log(searchUserResultData);
  return (
    <>
      {searchUserResultData.map((user, index) => (
        <li key={index} className="leftBarFriend">
          <img src="/assets/profile.jpeg" alt="" className="leftBarFriendImg" />
          <span className="leftBarFriendName">{user.username}</span>
        </li>
      ))}
    </>
  );
}

export default SearchUserResult;
