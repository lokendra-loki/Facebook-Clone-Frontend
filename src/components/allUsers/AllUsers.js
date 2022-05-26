import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./allUsers.scss";

function AllUsers({ allUsers }) {
  //Fetch allUsers to show in leftbar
  const [getAllUser, setGetAllUser] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get("/users/getAll");
      setGetAllUser(res.data);
    };
    fetchAllUsers();
  }, []);
  // console.log(getAllUser);

  //Get all userDetails for profile pic
  const [getAllUserDetails, setGetAllUserDetails] = useState([]);
  useEffect(() => {
    const fetchAllUserDetails = async () => {
      const res = await axios.get("/userDetail/all");
      setGetAllUserDetails(res.data);
    };
    fetchAllUserDetails();
  }, []);
  // console.log(getAllUserDetails);

  return (
    <>
      {getAllUser.map((user, index) => (
        <Link key={index} to={`/profile/${user._id}`} className="link">
          <li className="leftBarFriend">
            <img
              src={getAllUserDetails[index]?.profilePic}
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
