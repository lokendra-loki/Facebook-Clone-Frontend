import Share from "../share/Share";
import "./feed.scss";
import Post from "../post/Post";
import ParticularUserPost from "../particularUserPost/ParticularUserPost";
import { useState } from "react";
import axios from "axios";
import { ClassSharp } from "@material-ui/icons";

function Feed({ masterCurrentUser, masterCurrentUserDetail }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          masterCurrentUser={masterCurrentUser}
          masterCurrentUserDetail={masterCurrentUserDetail}
        />
        <Post masterCurrentUser={masterCurrentUser} />
        <ParticularUserPost />
      </div>
    </div>
  );
}

export default Feed;
