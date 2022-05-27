import React from "react";
import AllUsers from "../allUsers/AllUsers";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Chat,
  Event,
  HelpOutline,
  PlayCircleFilledOutlined,
  WorkOutline,
  Home,
} from "@material-ui/icons";
import "./leftbar.scss";
import SearchUserResult from "../searchUserResult/SearchUserResult";

function Leftbar({
  searchUserResultData,
  masterCurrentUser,
  allUsers,
  masterCurrentUserDetail,
  searchResult,
}) {
  console.log(searchUserResultData);

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

          <li className="leftBarListItem">
            <Chat className="leftBarIcon" />
            <span className="leftBarListItemText">Chats</span>
          </li>

          <li className="leftBarListItem">
            <PlayCircleFilledOutlined className="leftBarIcon" />
            <span className="leftBarListItemText">Videos</span>
          </li>

          <Link to={`/bookMark/${masterCurrentUser?._id}`} className="link">
            <li className="leftBarListItem">
              <Bookmark className="leftBarIcon" />
              <span className="leftBarListItemText">Bookmarks</span>
            </li>
          </Link>

          <li className="leftBarListItem">
            <HelpOutline className="leftBarIcon" />
            <span className="leftBarListItemText">Questions</span>
          </li>

          <li className="leftBarListItem">
            <WorkOutline className="leftBarIcon" />
            <span className="leftBarListItemText">Jobs</span>
          </li>

          <li className="leftBarListItem">
            <Event className="leftBarIcon" />
            <span className="leftBarListItemText">Events</span>
          </li>
        </ul>

        <hr className="leftBarhr" />

        <ul className="leftBarFriendList">
          <span className="allUser">All Users .</span>
          <input
            type="text"
            className="allUserSearch"
            placeholder="Search user"
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
