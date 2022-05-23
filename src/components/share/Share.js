import React, { useContext, useState } from "react";
import "./share.scss";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import { createFeedPost } from "../../context/feedPostContext/feedPostsApiCalls";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";

const Share = () => {
  const [desc, setDesc] = useState("");
  const { dispatch } = useContext(FeedPostsContext);

  const feedPost = {
    userID: 45,
    desc: desc,
    username: "loki",
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    createFeedPost(feedPost, dispatch);
  };

  return (
    <div className="share">
      <form className="shareWrapper" onSubmit={handleSubmitPost}>
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/profile.jpeg" alt="" />
          <input
            placeholder="What's in your mind "
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
              Share
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Share;
