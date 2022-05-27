import Share from "../share/Share";
import "./feed.scss";
import Post from "../post/Post";
import ParticularUserPost from "../particularUserPost/ParticularUserPost";

function Feed({ masterCurrentUser, masterCurrentUserDetail }) {

  //Fetch all posts that belongs particular user from element userID
  



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
