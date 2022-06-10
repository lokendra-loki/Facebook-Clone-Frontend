import React, { useContext, useState } from "react";
import "./share.scss";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useAPI } from "../../context/currentUserContext";

const Share = () => {
  const { user } = useContext(AuthContext);
  const { currentUser } = useAPI();

  //Create Post
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + "-" + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log("Upload is " + progress + "% done");
        setUploading(true);
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
      (error) => {
        console.log(error);
        setError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            const res = axios.post("/posts/create/", {
              userID: user._id,
              desc: desc,
              username: user?.username,
              profilePic: currentUser?.profilePic,
              img: downloadURL,
            });
            setSuccess(true);
            console.log(res.data);
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
          <Link to={`/profile/${user?.others?._id}`} className=" link">
            <img
              className="shareProfileImg"
              src={currentUser?.profilePic}
              alt=""
            />
          </Link>
          <input
            placeholder={`What's on your mind ${currentUser?.username} ? `}
            className="shareInput"
            onChange={(e) => setDesc(e.target.value)}
          />
          {!desc && <span className="inputRequiredStar">*</span>}
          {success && (
            <span className="youUploadedPost">Post has been Uploaded </span>
          )}
          {error && (
            <span className="youUploadedPostError">
              Oops! something went wrong{" "}
            </span>
          )}
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
              {!file && <span className="inputRequiredStar">(required)</span>}
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
              {uploading ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Share;
