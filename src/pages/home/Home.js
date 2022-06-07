import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./home.scss";

function Home() {
  //Fetch all users for search query
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get("/users/getAll");
      setAllUsers(res.data);
    };
    fetchAllUsers();
  }, []);

  //Search users by username query
  const [searchResult, setSearchResult] = useState("");
  const searchUserResultData = (data) => {
    return data.filter((item) =>
      item.username.toLowerCase().includes(searchResult.toLowerCase())
    );
  };
  console.log(searchUserResultData(allUsers));
  console.log(searchResult);

  //masterCurrentUser
  const { user } = useContext(AuthContext);
  const masterCurrentUser = user?.others;

  //masterCurrentUserDetail
  const [masterCurrentUserDetail, setMasterCurrentUserDetail] = useState({});
  useEffect(() => {
    try {
      const fetchMasterCurrentUserDetail = async () => {
        const res = await axios.post("/userDetail/userDetailData", {
          userID: masterCurrentUser?._id,
        });
        setMasterCurrentUserDetail(res.data[0]);
      };
      fetchMasterCurrentUserDetail();
    } catch (error) {
      console.log(error);
    }
  }, [masterCurrentUser?._id]);

  return (
    <>
      <Topbar
        masterCurrentUserDetail={masterCurrentUserDetail}
        masterCurrentUser={masterCurrentUser}
        setSearchResult={setSearchResult}
        allUsers={allUsers}
      />

      <div className="homeContainer">
        <div className="lbw">
          <Leftbar
            searchUserResultData={searchUserResultData(allUsers)}
            masterCurrentUserDetail={masterCurrentUserDetail}
            masterCurrentUser={masterCurrentUser}
            allUsers={allUsers}
            searchResult={searchResult}
          />
        </div>

        <div className="fw">
          <Feed
            masterCurrentUserDetail={masterCurrentUserDetail}
            masterCurrentUser={masterCurrentUser}
          />
        </div>

        <div className="rbw">
          <Rightbar
            searchUserResultData={searchUserResultData(allUsers)}
            masterCurrentUserDetail={masterCurrentUserDetail}
            masterCurrentUser={masterCurrentUser}
            allUsers={allUsers}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
