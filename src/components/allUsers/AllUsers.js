import React, { useEffect, useState } from "react";
import axios from "axios";
import "./allUsers.scss";

function AllUsers() {
  //Fetch allUsers
  const [getAllUser, setGetAllUser] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get("/users/getAll");
      setGetAllUser(res.data);
    };
    fetchAllUsers();
  }, []);
  console.log(getAllUser);

  return (
    <>
      {getAllUser.map((user, index) => (
        <li key={index} className="leftBarFriend">
          <img
            src={user.profilePic || "assets/profile.jpeg"}
            alt=""
            className="leftBarFriendImg"
          />
          <span className="leftBarFriendName">{user.username}</span>
        </li>
      ))}
    </>
  );
}

export default AllUsers;
