import axios from "axios";
import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

function Home() {
  ///get all user for search
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get("/users/getAll");
      setAllUsers(res.data);
    };
    fetchAllUsers();
  }, []);
  console.log(allUsers);

  //
  const [searchResult, setSearchResult] = useState("");
  const searchUserResultData = (data) => {
    return data.filter((item) =>
      item.username.toLowerCase().includes(searchResult.toLowerCase())
    );
  };
  console.log(searchUserResultData(allUsers));

  return (
    <>
      <Topbar setSearchResult={setSearchResult} />
      <div className="homeContainer">
        <Leftbar searchUserResultData={searchUserResultData(allUsers)}  />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
