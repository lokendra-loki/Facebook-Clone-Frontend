import React from "react";
import "./leftbar.scss";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import AllUsers from "../allUsers/AllUsers";
import SearchUserResult from "../searchUserResult/SearchUserResult";

function Leftbar({ searchUserResultData }) {
  console.log(searchUserResultData);

  return (
    <div className="leftBar">
      <div className="sideBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed className="leftBarIcon" />
            <span className="leftBarListItemText">Feed</span>
          </li>

          <li className="leftBarListItem">
            <Chat className="leftBarIcon" />
            <span className="leftBarListItemText">Chats</span>
          </li>

          <li className="leftBarListItem">
            <PlayCircleFilledOutlined className="leftBarIcon" />
            <span className="leftBarListItemText">Videos</span>
          </li>

          <li className="leftBarListItem">
            <Group className="leftBarIcon" />
            <span className="leftBarListItemText">Groups</span>
          </li>

          <li className="leftBarListItem">
            <Bookmark className="leftBarIcon" />
            <span className="leftBarListItemText">Bookmarks</span>
          </li>

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

          <li className="leftBarListItem">
            <School className="leftBarIcon" />
            <span className="leftBarListItemText">Courses</span>
          </li>
        </ul>

        <button className="leftBarButton">Show More</button>
        <hr className="leftBarhr" />

        <ul className="leftBarFriendList">
          {/* {searchUserResultData ? (
            <SearchUserResult searchUserResultData={searchUserResultData} />
          ) : (
            <AllUsers />
          )} */}
          <AllUsers />
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
