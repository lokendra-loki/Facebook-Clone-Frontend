import React, { useContext, useState } from "react";
import "./share.scss";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import { createFeedPost } from "../../context/feedPostContext/feedPostsApiCalls";
import { FeedPostsContext } from "../../context/feedPostContext/FeedPostContext";
import { AuthContext } from "../../context/authContext/AuthContext";

const Share = () => {
  // const { dispatch } = useContext(FeedPostsContext);
  // const { user } = useContext(AuthContext);
  // const currentUser = user;

  //Create Pos
  // const [desc, setDesc] = useState("");
  // const feedPost = {
  //   userID: currentUser?._id,
  //   desc: desc,
  //   username: currentUser?.username,
  // };

  // const handleSubmitPost = (e) => {
  //   e.preventDefault();
  //   createFeedPost(feedPost, dispatch);
  //   console.log(feedPost);
  // };

  //working code
  const { dispatch } = useContext(FeedPostsContext);
  const { user } = useContext(AuthContext);

  //Create Post
  const [desc, setDesc] = useState("");
  const feedPost = {
    userID: user.others._id,
    desc: desc,
    username: user.others.username,
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    createFeedPost(feedPost, dispatch);
    console.log(feedPost);
  };

  return (
    <div className="share">
      <form className="shareWrapper" onSubmit={handleSubmitPost}>
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/profile.jpeg" alt="" />
          <input
            placeholder={`What's on your mind ${user.others.username} ?`}
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
