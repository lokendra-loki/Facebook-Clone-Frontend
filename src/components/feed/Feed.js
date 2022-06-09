import Share from "../share/Share";
import Post from "../post/Post";
import ParticularUserPost from "../particularUserPost/ParticularUserPost";
import "./feed.scss";

function Feed({ masterCurrentUser, masterCurrentUserDetail }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          masterCurrentUser={masterCurrentUser}
          masterCurrentUserDetail={masterCurrentUserDetail}
        />
        <Post masterCurrentUser={masterCurrentUser} />
        {/* <ParticularUserPost /> */}
      </div>
    </div>
  );
}

export default Feed;
