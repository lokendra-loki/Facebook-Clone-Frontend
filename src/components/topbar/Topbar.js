import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SettingContainer from "../settingContainer/SettingContainer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import "./topbar.scss";
import { useAPI } from "../../context/currentUserContext";

function Topbar({ setSearchResult, allUsers }) {
  const { currentUser } = useAPI();
  const [openSettingCon, setOpenSettingCon] = useState(false);

  return (
    <>
      <div className="topbarContainer">
        {/* Topbar left */}
        <div className="topbarLeft">
          <Link to="/" className="link">
            <img src="/assets/fbLogo.png" className="facebookLogo" alt="" />
          </Link>

          <DensityMediumIcon className="navMoreIcon" />

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
            <div className="IconCon">
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
          <div className="trProfileCon">
            <Link to={`/profile/${currentUser?._id}`} className="link">
              <img
                className="trProfileImg"
                src={currentUser?.profilePic}
                alt=""
              />
              <span className="trProfileName">
                {currentUser?.username?.split(" ")[0]}
              </span>
            </Link>
          </div>

          <div className="trIconCon trIconCon1">
            <WidgetsOutlinedIcon className="widgetIcon" />
          </div>

          <div className="trIconCon trIconCon1">
            <ChatIcon />
          </div>

          <div className="trIconCon trIconCon1">
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
        {openSettingCon && <SettingContainer userInfo={currentUser} />}
      </div>
    </>
  );
}

export default Topbar;
