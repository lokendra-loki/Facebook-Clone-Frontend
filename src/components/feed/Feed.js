import Share from "../share/Share";
import "./feed.scss";
import Post from "../post/Post";

function Feed({ masterCurrentUser, masterCurrentUserDetail }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          masterCurrentUser={masterCurrentUser}
          masterCurrentUserDetail={masterCurrentUserDetail}
        />
        <Post masterCurrentUser={masterCurrentUser} />
      </div>
    </div>
  );
}

export default Feed;
