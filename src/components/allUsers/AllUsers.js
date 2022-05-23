import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  // console.log(getAllUser);

  return (
    <>
      {getAllUser.map((user, index) => (
        <Link key={index} to={`/profile/${user._id}`} className="link">
          <li  className="leftBarFriend">
            <img
              src={user.profilePic || "/assets/profile.jpeg"}
              alt=""
              className="leftBarFriendImg"
            />
            <span className="leftBarFriendName">{user.username}</span>
          </li>
        </Link>
      ))}
    </>
  );
}

export default AllUsers;
