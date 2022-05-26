import React, { useState } from "react";
import "./topbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SettingContainer from "../settingContainer/SettingContainer";
import ClearIcon from "@mui/icons-material/Clear";

function Topbar({
  setSearchResult,
  masterCurrentUser,
  masterCurrentUserDetail,
  allUsers,
}) {
  //Search user
  // const [searchQuery, setSearchQuery] = useState("");
  // console.log(allUsers.filter(user=>user.username.toLowerCase().includes(searchQuery)));

  // const searchUserResultData = (data) => {
  //   return data.filter((item) =>
  //     item.username.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };
  // console.log(searchUserResultData(allUsers));

  const [openSettingCon, setOpenSettingCon] = useState(false);

  return (
    <>
      <div className="topbarContainer">
        {/* Topbar left */}
        <div className="topbarLeft">
          <Link to="/" className="link">
            <img src="/assets/fbLogo.png" className="facebookLogo" alt="" />
          </Link>
          <div className="topbarLeft__search">
            <SearchIcon className="topSearchInputIcon" />
            <input
              className="topSearchInput"
              type="text"
              placeholder="Search Facebook"
              onChange={(e) => setSearchResult(e.target.value)}
            />
          </div>
        </div>

        {/* Topbar Center */}
        <div className="topbarCenter">
          <Link to="/" className="link">
            <div
              className="IconCon"
              onClick={(e) => window.location.reload("/")}
            >
              <HomeOutlinedIcon className="topbarCenterIcon" />
            </div>
          </Link>

          <div className="IconCon">
            <OndemandVideoOutlinedIcon className="topbarCenterIcon" />
          </div>

          <div className="IconCon">
            <StorefrontOutlinedIcon className="topbarCenterIcon" />
          </div>
          <div className="IconCon">
            <GroupsOutlinedIcon className="topbarCenterIcon" />
          </div>

          <div className="IconCon">
            <SportsEsportsOutlinedIcon className="topbarCenterIcon" />
          </div>
        </div>

        {/* Topbar right */}
        <div className="topbarRight">
          <Link to={`/profile/${masterCurrentUser?._id}`} className="link">
            <div className="trProfileCon">
              <img
                className="trProfileImg"
                src={masterCurrentUserDetail?.profilePic}
                alt=""
              />
              <span className="trProfileName">
                {masterCurrentUser?.username.split(" ")[0]}
              </span>
            </div>
          </Link>

          <div className="trIconCon">
            <WidgetsOutlinedIcon />
          </div>

          <div className="trIconCon">
            <ChatIcon />
          </div>

          <div className="trIconCon">
            <NotificationsIcon />
          </div>

          <div
            className={openSettingCon ? "trIconActive" : "trIconCon"}
            onClick={() => setOpenSettingCon(!openSettingCon)}
          >
            {openSettingCon ? <ClearIcon /> : <ArrowDropDownOutlinedIcon />}
          </div>
        </div>
      </div>
      <div className="settingContainerWrapper">
        {/* {openSettingCon && (
          <SettingContainer currentUser={user} currentUserDetail={userDetail} />
        )} */}
      </div>
    </>
  );
}

export default Topbar;
