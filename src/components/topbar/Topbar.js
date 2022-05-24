import React, { useContext } from "react";
import "./topbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  //Logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
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
          />
        </div>
      </div>
      {/* <span className="logOut" onClick={handleLogout}>
        Logout
      </span> */}

      {/* Topbar Center */}
      <div className="topbarCenter">
        <div className="IconCon">
          <HomeOutlinedIcon className="topbarCenterIcon" />
        </div>

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
          <img className="trProfileImg" src="/assets/profile.jpeg" alt="" />
          <span className="trProfileName">Lokendra</span>
        </div>

        <div className="trIconCon">
          <WidgetsOutlinedIcon />
        </div>

        <div className="trIconCon">
          <ChatIcon />
        </div>

        <div className="trIconCon">
          <NotificationsIcon />
        </div>

        <div className="trIconCon">
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
