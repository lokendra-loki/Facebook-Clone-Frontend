import React, { useState } from "react";
import "./share.scss";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";

const Share = ({ masterCurrentUser, masterCurrentUserDetail }) => {
  //Create Post
  const [desc, setDesc] = useState("");
  const [file, setFile] = React.useState(null);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            axios.post("/posts/create/", {
              userID: masterCurrentUser?._id,
              desc: desc,
              username: masterCurrentUser?.username,
              profilePic: masterCurrentUser?.profilePic,
              img: downloadURL,
            });
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <div className="share">
      <form className="shareWrapper" onSubmit={handleSubmitPost}>
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={masterCurrentUserDetail?.profilePic}
            alt=""
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>

            <div className="shareOption feelingShareOption">
              <Room className="shareIcon RoomIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption ">
              <EmojiEmotions className="shareIcon EmojiEmotionsIcon" />
              <span className="shareOptionText ">Feelings</span>
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
