import React, { useContext, useState } from "react";
import "./share.scss";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import { createFeedPost } from "../../context/feedPostContext/feedPostsApiCalls";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";

const Share = ({ masterCurrentUser, masterCurrentUserDetail }) => {
  const { dispatch } = useContext(FeedPostsContext);

  //Create Post
  const [desc, setDesc] = useState("");
  const feedPost = {
    userID: masterCurrentUser?._id,
    desc: desc,
    username: masterCurrentUser?.username,
    profilePic: masterCurrentUser?.profilePic,
  };
  const handleSubmitPost = (e) => {
    e.preventDefault();
    createFeedPost(feedPost, dispatch);
    window.location.reload();
  };

  return (
    <div className="share">
      <form className="shareWrapper" onSubmit={handleSubmitPost}>
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={masterCurrentUserDetail?.profilePic}
            alt="profilePic"
          />
          <input
            required
            placeholder={`What's on your mind ${masterCurrentUser?.username} ?`}
            className="shareInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <label htmlFor="file" className="shareOptionLabel">
                <PermMedia className="shareIcon PermMediaIcon" />
                <span className="shareOptionText">Photo/Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg.jpg"
                />
              </label>
            </div>

            <div className="shareOption">
              <Room className="shareIcon RoomIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions className="shareIcon EmojiEmotionsIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareButton1" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Share;
