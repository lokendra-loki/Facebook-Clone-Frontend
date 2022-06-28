import React, { useContext } from "react";
import SearchUserResult from "../searchUserResult/SearchUserResult";
import { Bookmark, Chat, WorkOutline, Home } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import SettingsIcon from "@mui/icons-material/Settings";
import AllUsers from "../allUsers/AllUsers";
import { Link } from "react-router-dom";
import "./leftbar.scss";

function Leftbar({
  searchUserResultData,
  allUsers,
  searchResult,
  setSearchResult,
}) {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="leftBar">
      <div className="sideBarWrapper">
        <ul className="leftBarList">
          <Link
            to="/"
            className="link"
            onClick={(e) => window.location.replace("/")}
          >
            <li className="leftBarListItem">
              <Home className="leftBarIcon" />
              <span className="leftBarListItemText">Home</span>
            </li>
          </Link>

          <Link to={`/profile/${user.others?._id}`} className="link">
            <li className="leftBarListItem">
              <Chat className="leftBarIcon" />
              <span className="leftBarListItemText">Profile</span>
            </li>
          </Link>

          <Link to={`/bookMark/${user.others?._id}`} className="link">
            <li className="leftBarListItem" onClick={window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
              <Bookmark className="leftBarIcon" />
              <span className="leftBarListItemText">Bookmarks</span>
            </li>
          </Link>

          <Link to={`/settings/${user.others?._id}`} className="link">
            <li className="leftBarListItem">
              <SettingsIcon className="leftBarIcon" />
              <span className="leftBarListItemText">Settings</span>
            </li>
          </Link>

          <li className="leftBarListItem">
            <WorkOutline className="leftBarIcon" />
            <span className="leftBarListItemText">Jobs</span>
          </li>
        </ul>

        <hr className="leftBarhr" />

        <ul className="leftBarFriendList">
          <span className="allUser">All Users .</span>
          <input
            type="text"
            className="allUserSearch"
            placeholder="Search user"
            onChange={(e) => setSearchResult(e.target.value)}
          />

          {searchResult ? (
            <SearchUserResult searchUserResultData={searchUserResultData} />
          ) : (
            <AllUsers allUsers={allUsers} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
